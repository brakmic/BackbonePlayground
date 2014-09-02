var stringify = require('json-stringify-safe');
var _ = require('underscore');
var radio = require('backbone.radio');
var domify = require('domify');
var templates = require('./templates/compiled');
var domReady = require('domready');
var User = require('./models/user');
var PlayRouter = require('./routers/playrouter');
var MainLayout = require('./views/marionette/main_layout');
var HeaderView = require('./views/marionette/header_view');
var SidebarView = require('./views/marionette/sidebar_view');
var MainView = require('./views/marionette/main_view');

module.exports = {

    init: function(){
        var self = window.playground = this;
        var App = window.app = new Marionette.Application();
        self.stringify = stringify;   //this is the 'circular-dependency-free' version of stringify
        self.User = User;             //for console testing
        self.user = new User();       //for displaying the 'two-way data-binding' example


        document.head.appendChild(domify(templates.htmlhead()));

        domReady(function(){
            console.log('Welcome to the Backbone Playground');
            document.body.appendChild(domify(templates.marionette.app()));
            self.initChannel('demoChannel');
            self.initModule(App);
            App.start();
        });
    },

    initChannel: function(channelName){
        console.log('Initializing Backbone.Radio channel: ' + channelName);
        window.playground.demoChannel = new Backbone.Radio.channel(channelName);
        window.playground.demoChannel.comply('execute:command', function(message){
            alert('Executing command: ' + message);
            //console.log('Executing command: ' + command);
        });
    },

    initModule: function(app){
        if(app){
            //add App region
            app.addInitializer(function(){
                app.addRegions({
                    main: '#app'
                });
            });

            app.module('InitModule', function(InitModule, App, Backbone, Marionette, $, _){
                //add router
                InitModule.addInitializer(function(){
                    //currently without an explicit Marionette-Controller
                    InitModule.Router = new PlayRouter();
                });
                //add layout and base regions (header, sidebar, main)
                InitModule.addInitializer(function(){
                    var layout = new MainLayout();
                    layout.on('show', function(){
                        this.headerRegion.show(new HeaderView());
                        this.sidebarRegion.show(new SidebarView());
                        this.mainRegion.show(new MainView());
                    });
                    App.main.show(layout);
                });
                //start backbone history
                App.on("start", function(){
                    if (Backbone.history){
                        Backbone.history.start({pushState: true});
                        console.log('Backbone.History started.');
                    }
                });
            });

        }else{
            throw new Error('Marionette.Application was not initialized.')
        }
    }
};

module.exports.init();
