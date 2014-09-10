var TwoWayView = require('../views/twoway');
var BlankView = require('../views/blank');
var CustomersListView = require('../views/customerlist');
var Customers = require('../collections/customers');
var Command = require('../models/command');

module.exports = Marionette.Controller.extend({
    customers: function(){
        var customers = new Customers();
        customers.fetch();
        window.app.main.currentView.mainRegion.show(new CustomersListView(
            {
                collection: customers
            }));
    },

    blank: function(){
        window.app.main.currentView.mainRegion.show(new BlankView( { model: new Command() }));
    },

    twoway: function(){
        window.app.main.currentView.mainRegion.show(new TwoWayView());
    },

    catchAll: function() {
        this.blank();
    }
});