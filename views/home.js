var templates = require('../templates/compiled');
var domify = require('domify');

module.exports = Backbone.View.extend({
    events: {
        'click input[type=button]': 'clickReact'
    },
    initialize: function(){
        console.log('Home view loaded');
        this.render();
    },
    render: function(){
        this.$el.html(templates.body);
    },
    clickReact: function(e){
        alert('Click');
    }
});
