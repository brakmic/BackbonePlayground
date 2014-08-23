var MainView = require('../views/main');
var DemoView = require('../views/demo');
var BlankView = require('../views/blank');

module.exports = Backbone.Router.extend({
    subView: null,
    routes: {
        '': 'blank',
        'home': 'blank',
        'demo': 'demo',
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

    catchAll: function () {
        this.blank();
    },

    switchView: function(view){
        if(this.subView){
            console.log('Unbinding & removing view: ' + app.stringify(this.subView.name));
            this.subView.remove().unbind();
        }
        this.mainView.$el.append(view.el);
        this.subView = view;
        this.subView.render();

    }
});
