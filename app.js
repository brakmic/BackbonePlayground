var stringify = require('json-stringify-safe');
var domReady = require('domready');
var User = require('./models/user'); //backbone test
var HomeView = require('./views/home');

module.exports = {
    init: function(){
        var self = window.app = this;
        window.stringify = stringify;
        domReady(function(){
            self.startApp();
        });
    },
    startApp: function(){
        console.log('Welcome to the Backbone Playground');

        var user = new User({
            name: 'Dummy',
            age: 10
        });
        console.log('User > ' + stringify(user));

        var home = new HomeView({
            el: document.body
        });

    }
};

module.exports.init();
