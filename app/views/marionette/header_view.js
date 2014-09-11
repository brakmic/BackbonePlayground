var BaseView = require('../baseItemView');
var templates = require('../../templates/compiled');

module.exports = BaseView.extend({
    tagName: 'div',
    template: templates.marionette.header_nav,

    events: {
        'click a': 'navigate'
    }
});
