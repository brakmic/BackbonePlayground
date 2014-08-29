var stringify = require('json-stringify-safe');
var domify = require('domify');
var templates = require('./templates/compiled');
var domReady = require('domready');
var User = require('./models/user'); //backbone test
var PlayRouter = require('./routers/playrouter');
var MarionetteApp = require('./m_app');

module.exports = {
    init: function(){
        var self = window.app = this;
        self.stringify = stringify;   //for easier logging of objects
        self.User = User;             //for testing in the console



        document.head.appendChild(domify(templates.htmlhead()));

        domReady(function(){
            console.log('Welcome to the Backbone Playground');

            if(!self.router) {
                self.initRouter();
            }
            if(!self.marionette) {
                //an "embedded" MarionetteJS app for testing
                self.marionette = new MarionetteApp({});
                self.marionette.start();
            }
        });
    },

    initRouter: function(){
        window.app.router = new PlayRouter();
        Backbone.history.start({ pushState: true });
    }
};

module.exports.init();
