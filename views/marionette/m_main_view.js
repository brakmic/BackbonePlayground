var _ = require('underscore');
var templates = require('../../templates/compiled');

module.exports = Backbone.Marionette.ItemView.extend({
    template: templates.marionette.m_main_view
});
