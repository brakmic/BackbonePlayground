var User = require('../models/user');
var _    = require('underscore');

module.exports = Backbone.Collection.extend({
   model: User,
   url: '/api/users'
});
