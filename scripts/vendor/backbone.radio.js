// Backbone.Radio v0.6.0
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['backbone', 'underscore'], function(Backbone, _) {
      return factory(Backbone, _);
    });
  }
  else if (typeof exports !== 'undefined') {
    var Backbone = require('backbone');
    var _ = require('underscore');
    module.exports = factory(Backbone, _);
  }
  else {
    factory(root.Backbone, root._);
  }
}(this, function(Backbone, _) {
  'use strict';

  var slice = Array.prototype.slice;
  
  var previousRadio = Backbone.Radio;
  
  var Radio = Backbone.Radio = {};
  
  Radio.VERSION = '0.6.0';
  
  // This allows you to run multiple instances of Radio on the same
  // webapp. After loading the new version, call `noConflict()` to
  // get a reference to it. At the same time the old version will be
  // returned to Backbone.Radio.
  Radio.noConflict = function () {
    Backbone.Radio = previousRadio;
    return this;
  };
  
  // Whether or not we're in DEBUG mode or not. DEBUG mode helps you
  // get around the issues of lack of warnings when events are mis-typed.
  Radio.DEBUG = false;
  
  // This is the method that's called when an unregistered event was called.
  // By default, it logs warning to the console. By overriding this you could
  // make it throw an Error, for instance. This would make firing a nonexistent event
  // have the same consequence as firing a nonexistent method on an Object.
  function debugLog(warning, eventName, channelName) {
    if (Radio.DEBUG) {
      var channelText = channelName ? ' on the ' + channelName + ' channel' : '';
      console.warn(warning + channelText + ': "' + eventName + '"');
    }
  }
  
  // An internal method used to handle Radio's method overloading for Requests and
  // Commands. It's borrowed from Backbone.Events. It differs from Backbone's overload
  // API (which is used in Backbone.Events) in that it doesn't support space-separated
  // event names.
  function eventsApi(obj, action, name, rest) {
    if (!name) {
      return true;
    }
  
    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }
  
    return true;
  }
  
  /*
   * tune-in
   * -------
   * Get console logs of a channel's activity
   *
   */
  
  var _logs = {};
  
  // This is to produce an identical function in both tuneIn and tuneOut,
  // so that Backbone.Events unregisters it.
  function _partial(channelName) {
    return _logs[channelName] || (_logs[channelName] = _.partial(Radio.log, channelName));
  }
  
  _.extend(Radio, {
  
    // Log information about the channel and event
    log: function(channelName, eventName) {
      var args = slice.call(arguments, 2);
      console.log('[' + channelName + '] "' + eventName + '"', args);
    },
  
    // Logs all events on this channel to the console. It sets an
    // internal value on the channel telling it we're listening,
    // then sets a listener on the Backbone.Events
    tuneIn: function(channelName) {
      var channel = Radio.channel(channelName);
      channel._tunedIn = true;
      channel.on('all', _partial(channelName));
      return this;
    },
  
    // Stop logging all of the activities on this channel to the console
    tuneOut: function(channelName) {
      var channel = Radio.channel(channelName);
      channel._tunedIn = false;
      channel.off('all', _partial(channelName));
      delete _logs[channelName];
      return this;
    }
  });
  
  /*
   * Backbone.Radio.Commands
   * -----------------------
   * A messaging system for sending orders.
   *
   */
  
  Radio.Commands = {
    
    // Issue a command
    command: function(name) {
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'command', name, args)) {
        return this;
      }
      var channelName = this.channelName;
      var commands = this._commands;
  
      // Check if we should log the command, and if so, do it
      if (channelName && this._tunedIn) {
        Radio.log.apply(this, [channelName, name].concat(args));
      }
  
      // If the command isn't handled, log it in DEBUG mode and exit
      if (commands && (commands[name] || commands['default'])) {
        var handler = commands[name] || commands['default'];
        args = commands[name] ? args : arguments;
        handler.callback.apply(handler.context, args);
      } else {
        debugLog('An unhandled command was fired', name, channelName);
      }
  
      return this;
    },
  
    // Register a handler for a command.
    comply: function(name, callback, context) {
      if (!eventsApi(this, 'comply', name, [callback, context])) {
        return this;
      }
      this._commands || (this._commands = {});
  
      this._commands[name] = {
        callback: callback,
        context: context || this
      };
  
      return this;
    },
  
    // Register a handler for a command that happens just once.
    complyOnce: function(name, callback, context) {
      if (!eventsApi(this, 'complyOnce', name, [callback, context])) {
        return this;
      }
      var self = this;
  
      var once = _.once(function() {
        self.stopComplying(name);
        return callback.apply(this, arguments);
      });
  
      return this.comply(name, once, context);
    },
  
    // Remove handler(s)
    stopComplying: function(name) {
      if (!eventsApi(this, 'stopComplying', name)) {
        return this;
      }
      var store = this._commands;
  
      if (!name) {
        delete this._commands;
      } else if (store && store[name]) {
        delete store[name];
      } else {
        debugLog('Attempted to remove the unregistered command', name, this.channelName);
      }
  
      return this;
    }
  };
  
  /*
   * Backbone.Radio.Requests
   * -----------------------
   * A messaging system for requesting data.
   *
   */
  
  function makeCallback(callback) {
    return _.isFunction(callback) ? callback : _.constant(callback);
  }
  
  Radio.Requests = {
  
    // Make a request
    request: function(name) {
      var args = slice.call(arguments, 1);
      var channelName = this.channelName;
      var requests = this._requests;
  
      // Check if we should log the request, and if so, do it
      if (channelName && this._tunedIn) {
        Radio.log.apply(this, [channelName, name].concat(args));
      }
  
      // If the request isn't handled, log it in DEBUG mode and exit
      if (requests && (requests[name] || requests['default'])) {
        var handler = requests[name] || requests['default'];
        args = requests[name] ? args : arguments;
        return handler.callback.apply(handler.context, args);
      } else {
        debugLog('An unhandled request was fired', name, channelName);
      }
    },
  
    // Set up a handler for a request
    reply: function(name, callback, context) {
      if (!eventsApi(this, 'reply', name, [callback, context])) {
        return this;
      }
  
      this._requests || (this._requests = {});
  
      this._requests[name] = {
        callback: makeCallback(callback),
        context: context || this
      };
  
      return this;
    },
  
    // Set up a handler that can only be requested once
    replyOnce: function(name, callback, context) {
      if (!eventsApi(this, 'replyOnce', name, [callback, context])) {
        return this;
      }
  
      var self = this;
  
      var once = _.once(function() {
        self.stopReplying(name);
        return makeCallback(callback).apply(this, arguments);
      });
  
      return this.reply(name, once, context);
    },
  
    // Remove handler(s)
    stopReplying: function(name) {
      if (!eventsApi(this, 'stopReplying', name)) {
        return this;
      }
  
      var store = this._requests;
  
      if (!name) {
        delete this._requests;
      } else if (store && store[name]) {
        delete store[name];
      } else {
        debugLog('Attempted to remove the unregistered request', name, this.channelName);
      }
  
      return this;
    }
  };
  
  /*
   * Backbone.Radio.channel
   * ----------------------
   * Get a reference to a channel by name.
   *
   */
  
  Radio._channels = {};
  
  Radio.channel = function(channelName) {
    if (!channelName) {
      throw new Error('You must provide a name for the channel.');
    }
    return Radio._channels[channelName] || new Radio.Channel(channelName);
  };
  
  /*
   * Backbone.Radio.Channel
   * ----------------------
   * A Channel is an object that extends from Backbone.Events,
   * Radio.Commands, and Radio.Requests.
   *
   */
  
  Radio.Channel = function(channelName) {
    this.channelName = channelName;
    Radio._channels[channelName] = this;
  };
  
  _.extend(Radio.Channel.prototype, Backbone.Events, Radio.Commands, Radio.Requests, {
  
    // Remove all handlers from the messaging systems of this channel
    reset: function() {
      this.off();
      this.stopListening();
      this.stopComplying();
      this.stopReplying();
      return this;
    }
  });
  
  /*
   * Top-level API
   * -------------
   * Supplies the 'top-level API' for working with Channels directly
   * from Backbone.Radio.
   *
   */
  
   var channel, args, systems = [Backbone.Events, Radio.Commands, Radio.Requests];
  
   _.each(systems, function(system) {
    _.each(system, function(method, methodName) {
      Radio[methodName] = function(channelName) {
        args = slice.call(arguments, 1);
        channel = this.channel(channelName);
        return channel[methodName].apply(channel, args);
      };
    });
  });
  

  return Radio;
}));
