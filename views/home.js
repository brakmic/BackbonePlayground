var templates = require('../templates/compiled');

module.exports = Backbone.View.extend({
    events: {
        'click input[type=button]': 'clickReact'
    },
    initialize: function(){
        this.render();
    },
    render: function(){
        this.$el.html(templates.main);
    },
    clickReact: function(e){
        alert('Click on ' + e.currentTarget.id);
    }
});
