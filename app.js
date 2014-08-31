var stringify = require('json-stringify-safe');
var _ = require('underscore');
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
        self.stringify = stringify;   //this is the 'circular-dependency-free' version of stringify
        self.User = User;             //for console testing
        self.user = new User();       //for displaying the 'two-way data-binding' example

        document.head.appendChild(domify(templates.htmlhead()));

        domReady(function(){
            console.log('Welcome to the Backbone Playground');
            document.body.appendChild(domify(templates.marionette.app()));
            self.initApp();
        });
    },

    initApp: function(){

        var App = window.app = new Marionette.Application();
        //add App region
        window.app.addInitializer(function(){
            App.addRegions({
                main: '#app'
            });
        });
        //add router
        App.addInitializer(function(){
            //currently without an explicit Marionette-Controller
            App.Router = new PlayRouter();
        });
        //add layout and base regions (header, sidebar, main)
        App.addInitializer(function(){
            window.playground.initLayout();
        });
        //start backbone history
        App.on("start", function(){
            if (Backbone.history){
                Backbone.history.start({pushState: true});
                console.log('Backbone.History started.');
            }
        });
        //start marionette
        App.start();
    },
    initLayout: function(){
        var layout = new MainLayout();
        layout.on('show', function(){
            this.headerRegion.show(new HeaderView());
            this.sidebarRegion.show(new SidebarView());
            this.mainRegion.show(new MainView());
        });
        app.main.show(layout);
    }
};

module.exports.init();
