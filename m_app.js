var _ = require('underscore');
var MarionetteItemView = require('./views/marionette/m_main_view');

function MarionetteModule(options){
    //**TODO**
    //Currently just an empty wrapper
}

MarionetteModule.prototype.start = function() {

    //for console debugging
    var self = window.app.marionette = this;
    var simpleItemView;

    //***************************************************************
    //All MarionetteJS-elements belong to an Application instance
    self.MarionetteApp = new Backbone.Marionette.Application();

    //App events
    self.MarionetteApp.on('before:start', function () {
        console.log('Starting MarionetteJS.')
    });
    self.MarionetteApp.on('start', function () {
        console.log('MarionetteJS started.')
    });

    //Add a Region
    //Inside a Region you can put any number of sub-views
    // (ItemViews, CollectionViews or CompositeViews)
    self.MarionetteApp.addRegions({
        rootRegion: '#subview'
    });

    //Region events (check their outputs in the browser console)
    self.MarionetteApp.rootRegion.on('show', function (view) {
        console.log('Displayed view: ' + view.el.baseURI);
    });

    self.MarionetteApp.rootRegion.on('close', function (view) {
        console.log('Closed view: ' + view.el.baseURI);
    });

    //A basic Marionette ItemView
    simpleItemView = new MarionetteItemView();

    //Attach the view to the region
    // This can also be done directly in Region-object:
    // Marionette.Region.extend({
    //     el: '#some_el_for_region',
    //     currentView: some_view_to_be_shown_when_region_gets_created
    // });
    self.MarionetteApp.rootRegion.show(simpleItemView);

    //One can combine the elements even further, by using layouts
    //and regions inside them, or vice versa.
    //
    //For example:
    //self.MarionetteApp.AppLayout = new MarionetteLayout();
    //self.MarionetteApp.AppLayout.addRegion(self.MarionetteApp.rootRegion);
    //self.MarionetteApp.AppLayout.rootRegion.show(mItemView)

    //Kickoff!
    self.MarionetteApp.start();
};

module.exports = MarionetteModule;
