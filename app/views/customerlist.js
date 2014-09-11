var _ = require('underscore');
var CustomerView = require('./customer');
var BaseCompositeView = require('./baseCompositeView');
var templates = require('../templates/compiled');

module.exports = BaseCompositeView.extend({
    childView: CustomerView,
    childViewContainer: '#customer-list',
    template: templates.customerlist
});
