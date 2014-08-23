var BaseView = require('./base');
var templates = require('../templates/compiled');

module.exports = BaseView.extend({

    events: {
      'click a': 'navigate'
    },

    render: function () {
        this.$el.html(templates.header);
        return this;
    },

    navigate: function (event) {
        event.preventDefault();
        app.router.navigate(event.target.pathname, { trigger: true });
    }
});
