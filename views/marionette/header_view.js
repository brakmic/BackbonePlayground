var BaseView = require('../baseItemView');
var templates = require('../../templates/templates.js');

module.exports = BaseView.extend({
    tagName: 'div',
    template: templates.marionette.header_nav,

    events: {
        'click a': 'navigate'
    }
});
