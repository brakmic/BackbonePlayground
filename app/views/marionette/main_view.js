var BaseView = require('../baseItemView');
var templates = require('../../templates/compiled');

module.exports = BaseView.extend({

    template: templates.marionette.main_view
});
