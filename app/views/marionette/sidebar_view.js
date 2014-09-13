var BaseView = require('../baseItemView');
var templates = require('../../templates/templates.js');
//var Header = require('./header');

module.exports = BaseView.extend({
    tagName: 'div',
    template: templates.marionette.sidebar_nav,

    events: {
        'click a': "clicked"
    }
});
