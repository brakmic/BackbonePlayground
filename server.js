var Hapi = require('hapi');
var config = require('getconfig');
var server = new Hapi.Server('localhost', config.http.port);
var moonbootsConfig = require(config.root + '/moonbootsConfig');
var goodConfig = require(config.root + '/goodConfig');
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
server.pack.register([ moonbootsPlugin, goodPlugin, poopPlugin ], function(err){
    if(err) throw err;
    // If everything loaded correctly, start the server:
    server.start(function (err) {
        if (err) throw err;
        server.log('info', serverName + ' running at: ' + server.info.uri);
    });
});
