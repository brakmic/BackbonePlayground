var BaseView = require('./baseItemView');
var templates = require('../templates/compiled');

module.exports = BaseView.extend({
    tagName: 'div',
    className: 'blank',
    template: templates.blank
});
