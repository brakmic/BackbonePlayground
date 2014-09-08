var Hapi = require('hapi');
var config = require('getconfig');
var server = new Hapi.Server('localhost', config.http.port);
var moonbootsConfig = require(config.root + '/moonbootsConfig');
var goodConfig = require(config.root + '/goodConfig');
var customersAPI = require(config.root + '/customersAPI');
var usersAPI = require(config.root + '/usersAPI');

var serverName = 'Backbone Playground';
var internals = {};

var moonbootsPlugin = {
                       plugin: require('moonboots_hapi'),
                       options: moonbootsConfig
                    };

var goodPlugin = {
                    plugin: require('good'),
                    options: goodConfig
                 };

var poopPlugin = {
                    plugin: require('poop')
                 };

server.route({
    method: 'GET',
    path: '/public/css/{param*}',
    handler:{
        directory: {
            path: 'public/css/',
            listing: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/assets/img/{param*}',
    handler:{
        directory: {
            path: 'public/css/binary/',
            listing: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/fonts/{param*}',
    handler:{
        directory: {
            path: 'public/fonts/',
            listing: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/scripts/{param*}',
    handler:{
        directory: {
            path: 'scripts/',
            listing: false
        }
    }
});


server.route({
    method: 'GET',
    path: '/favicon.ico',
    handler: function(request, reply){
        reply.file('favicon.ico');
    }
});

server.route({
    method: 'GET',
    path: '/polymer-demo.html',
    handler: function(request, reply){
        reply.file('templates/polymer-demo.html');
    }
});

// set clientconfig cookie
internals.configStateConfig = {
    encoding: 'none',
    ttl: 1000 * 60 * 15,
    isSecure: config.isSecure
};
server.state('config', internals.configStateConfig);
internals.clientConfig = JSON.stringify(config.client);
server.ext('onPreResponse', function(request, reply) {
    if (!request.state.config) {
        var response = request.response;
        return reply(response.state('config', encodeURIComponent(internals.clientConfig)));
    }
    else {
        return reply();
    }
});
server.pack.register([ moonbootsPlugin, goodPlugin, poopPlugin, customersAPI, usersAPI ], function(err){
    if(err) throw err;
    // If everything loaded correctly, start the server:
    server.start(function (err) {
        if (err) throw err;
        server.log('info', serverName + ' running at: ' + server.info.uri);
    });
});
