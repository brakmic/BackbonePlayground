var Hapi         = require('hapi');
var config       = require('./configs/playground');
var server       = new Hapi.Server();
var Good         = require('good');
var dummyAPI     = require('hapi-dummy-api');
var customersAPI = require(config.root + '/customersAPI');
var usersAPI     = require(config.root + '/usersAPI');
server.connection({
                    host: 'localhost',
                    port: config.http.port
                    });
var goodConfig = require(config.root + '/goodConfig');

var serverName = 'Backbone Playground';
var internals  = {};

var goodPlugin = {
                    plugin: require('good'),
                    options: goodConfig
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
            path: 'dist/fonts/',
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


function startServer(){ //export for gulp

    server.register([
                    {
                        register: dummyAPI,
                        options: customersAPI.options
                    },
                    {
                        register: dummyAPI,
                        options: usersAPI.options
                    }
                    ], function(err){
            console.log(err);
    });

    server.start(function () {
        console.log('info', serverName + ' running at: ' + server.info.uri);
    });
}

module.exports = startServer();
