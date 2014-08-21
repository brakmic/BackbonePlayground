var stringify = require('json-stringify-safe');
var User = require('./models/user'); //backbone test

module.exports = {
    init: function(){
        var self = window.app = this;
        window.stringify = stringify;
        this.startApp();
    },
    startApp: function(){
        console.log('Welcome to the Backbone Playground');

        var user = new User({
            name: 'Dummy',
            age: 10
        });
        console.log('User > ' + stringify(user));
    }
};

module.exports.init();
