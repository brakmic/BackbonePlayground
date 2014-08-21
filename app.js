var stringify = require('json-stringify-safe');
var domReady = require('domready');
var User = require('./models/user'); //backbone test
var HomeView = require('./views/home');

module.exports = {
    init: function(){

        var self = window.app = this;
        window.app.stringify = stringify; //for easier logging of objects
        window.app.User = User; //for testing in the console

        domReady(function(){
            self.startApp();
        });
    },
    startApp: function(){
        console.log('Welcome to the Backbone Playground');

        var home = new HomeView({
            el: document.body
        });

    }
};

module.exports.init();
