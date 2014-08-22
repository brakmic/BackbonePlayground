var templates = require('../templates/compiled');

module.exports = Backbone.View.extend({
    initialize: function(){
        console.log('Initialize the Blank View');
        this.render();
    },
    render: function(){
        this.$el.html(templates.blank);
        return this;
    }
});
