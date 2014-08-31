var stringify = require('json-stringify-safe');
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
        window.app = new Marionette.Application();
        //add App region
        window.app.addInitializer(function(){
            window.app.addRegions({
                main: '#app'
            });
        });
        //add router
        window.app.addInitializer(function(){
            //currently without an explicit Marionette-Controller
            window.app.Router = new PlayRouter();
        });
        //add layout and base regions (header, sidebar, main)
        window.app.addInitializer(function(){
            window.playground.initLayout();
        });
        //start backbone history
        window.app.on("start", function(){
            if (Backbone.history){
                Backbone.history.start({pushState: true});
                console.log('Backbone.History started.');
            }
        });
        //start marionette
        window.app.start();
    },
    initLayout: function(){
        var layout = new MainLayout();
        window.app.main.show(layout);

        layout.headerRegion.show(new HeaderView());
        layout.sidebarRegion.show(new SidebarView());
        layout.mainRegion.show(new MainView());
    }
};

module.exports.init();
