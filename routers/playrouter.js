var MainView = require('../views/main');
var DemoView = require('../views/demo');
var BlankView = require('../views/blank');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'blank',
        'home': 'blank',
        'demo': 'demo',
        '(*path)': 'catchAll'
    },

    initialize: function() {
        console.log('Initializing the Router.');
        this.main();
    },

    main: function(){
        if(!this.mainview) {
            this.mainview = new MainView({
                el: 'body'
            });
        }
    },

    demo: function(){
        new DemoView({ el: 'section#main' });
    },

    blank: function(){
        new BlankView({ el: 'section#main' });
    },

    catchAll: function () {
        this.blank();
    }
});
