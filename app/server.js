var Hapi = require('hapi');
var config = require('./configs/playground');
var server = new Hapi.Server('localhost', config.http.port);
var goodConfig = require(config.root + '/goodConfig');
var customersAPI = require(config.root + '/customersAPI');
var usersAPI = require(config.root + '/usersAPI');

var serverName = 'Backbone Playground';
var internals = {};

var goodPlugin = {
                    plugin: require('good'),
                    options: goodConfig
                 };

var poopPlugin = {
                    plugin: require('poop')
                 };


server.route({
    method: 'GET',
    path: '/{param*}',
    handler: function(request, reply){
        reply.file('dist/index.html');
    }
});


server.route({
    method: 'GET',
    path: '/public/css/{param*}',
    handler:{
        directory: {
            path: 'dist/css/',
            listing: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/css/{param*}',
    handler:{
        directory: {
            path: 'dist/css/',
            listing: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/fonts/{param*}',
    handler:{
        directory: {
            path: 'dist/fonts/',
            listing: false
        }
    }
});



server.route({
    method: 'GET',
    path: '/assets/img/{param*}',
    handler:{
        directory: {
            path: 'dist/css/images/binary/',
            listing: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/public/fonts/{param*}',
    handler:{
        directory: {
            path: 'dist/css/fonts/',
            listing: false
        }
    }
});

server.route({
    method: 'GET',
    path: '/scripts/{param*}',
    handler:{
        directory: {
            path: 'dist/scripts/',
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


function startServer(){ //export for gulp
    server.pack.register([ goodPlugin, poopPlugin, customersAPI, usersAPI ], function(err){
        server.start(function (err) {
            if (err) throw err;
            server.log('info', serverName + ' running at: ' + server.info.uri);
        });
    });
}

module.exports = startServer;
