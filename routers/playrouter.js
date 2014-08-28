var MainView = require('../views/main');
var BlankView = require('../views/blank');
var TwoWayView = require('../views/twoway');
var CustomersListView = require('../views/customerlist');
var Customers = require('../collections/customers');

module.exports = Backbone.Router.extend({
    subView: null,
    routes: {
        '': 'blank',
        'home': 'blank',
        'customers': 'customers',
        'twoway': 'twoway',
        '(*path)': 'catchAll'
    },

    initialize: function(options) {
        console.log('Initializing the Router');
        this.main();
    },

    main: function(){
        if(!this.mainView) {
            this.mainView = new MainView({
                el: 'body',
                name: 'main'
            });
            this.mainView.render();
        }
    },

    customers: function(){
        this.switchView(new CustomersListView({ collection: new Customers(), el: '#subview', name: 'cslistview' }));
    },

    blank: function(){
        this.switchView(new BlankView({ el: '#subview', name: 'blank' }));
    },

    twoway: function(){
        this.switchView(new TwoWayView({ el: '#subview', name: 'twoway' }));
    },

    catchAll: function () {
        this.blank();
    },

    switchView: function(view){
        if(this.subView){
            console.log('Unbinding & removing view: ' + this.subView.name);
            this.subView.remove();
        }
        this.mainView.$el.append(view.el);
        this.subView = view;
        this.subView.render();

    }
});
