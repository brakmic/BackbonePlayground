var templates = require('../templates/compiled');
var domify = require('domify');

module.exports = Backbone.View.extend({
    initialize: function(){
        console.log('Home view loaded');
        this.render();
    },
    render: function(){
        this.$el.html(templates.body);
    }
});
