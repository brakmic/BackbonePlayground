var _ = require('underscore');
var templates = require('../../templates/compiled');

module.exports = Backbone.Marionette.ItemView.extend({
    name: 'Basic Marionette View',
    template: templates.marionette.m_main_view
});
