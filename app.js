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
        var self = window.app = this;
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
        window.app.marionette = new Marionette.Application();
        //add App region
        window.app.marionette.addInitializer(function(){
            window.app.marionette.addRegions({
                main: '#app'
            });
        });
        //add router
        window.app.marionette.addInitializer(function(){
            //currently without an explicit Marionette-Controller
            window.app.marionette.Router = new PlayRouter();
        });
        //add layout and base regions (header, sidebar, main)
        window.app.marionette.addInitializer(function(){
            window.app.initLayout();
        });
        //start backbone history
        window.app.marionette.on("start", function(){
            if (Backbone.history){
                Backbone.history.start({pushState: true});
                console.log('Backbone.History started.');
            }
        });
        //start marionette
        window.app.marionette.start();
    },
    initLayout: function(){
        var m = window.app.marionette;
        var layout = new MainLayout();
        m.main.show(layout);

        layout.headerRegion.show(new HeaderView());
        layout.sidebarRegion.show(new SidebarView());
        layout.mainRegion.show(new MainView());
    }
};

module.exports.init();
