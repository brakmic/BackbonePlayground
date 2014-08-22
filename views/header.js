var templates = require('../templates/compiled');

module.exports = Backbone.View.extend({

    events: {
      'click a': 'navigate'
    },

    initialize: function () {
        this.render();
        console.log('Initializing Headers');
    },

    render: function () {
        this.$el.html(templates.header);
    },

    navigate: function (event) {
        event.preventDefault();
        app.router.navigate(event.target.pathname, { trigger: true });
    }
});
