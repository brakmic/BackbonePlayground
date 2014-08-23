var MainView = require('../views/main');
var DemoView = require('../views/demo');
var BlankView = require('../views/blank');
var TwoWayView = require('../views/twoway');

module.exports = Backbone.Router.extend({
    subView: null,
    routes: {
        '': 'blank',
        'home': 'blank',
        'demo': 'demo',
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

    demo: function(){
        this.switchView(new DemoView({ el: 'section#subview', name: 'demo' }));
    },

    blank: function(){
        this.switchView(new BlankView({ el: 'section#subview', name: 'blank' }));
    },

    twoway: function(){
        this.switchView(new TwoWayView({ el: 'section#subview', name: 'twoway' }));
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
