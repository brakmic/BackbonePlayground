var templates = require('../templates/compiled');
var Header = require('./header');

module.exports = Backbone.View.extend({
    events: {
        'click input[type=button]': 'clickReact'
    },
    initialize: function(){
        console.log('Initialize the Main View');
        this.render();
        new Header({ el: 'header'});
    },
    render: function(){
        this.$el.html(templates.main);
    },
    clickReact: function(e){
        alert('Click on ' + e.currentTarget.id);
    }
});
