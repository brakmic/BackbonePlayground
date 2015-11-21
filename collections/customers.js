var Customer = require('../models/customer');
var _        = require('underscore');

module.exports = Backbone.Collection.extend({
    model: Customer,
    url: '/api/customers'
});
