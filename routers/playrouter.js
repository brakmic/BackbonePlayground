var TwoWayView = require('../views/twoway');
var BlankView = require('../views/blank');
var CustomersListView = require('../views/customerlist');
var Customers = require('../collections/customers');

module.exports = Marionette.AppRouter.extend({
    routes: {
        '': 'blank',
        'home': 'blank',
        'customers': 'customers',
        'twoway': 'twoway',
        '(*path)': 'catchAll'
    },

    customers: function(){
        var customers = new Customers();
        customers.fetch();
        window.app.main.currentView.mainRegion.show(new CustomersListView(
                                            {
                                                collection: customers
                                            }));
    },

    blank: function(){
        window.app.main.currentView.mainRegion.show(new BlankView());
    },

    twoway: function(){
        window.app.main.currentView.mainRegion.show(new TwoWayView());
    },

    catchAll: function () {
        this.blank();
    }
});
