module.exports = Backbone.Model.extend({
    url: '/api/commands',
    defaults: {
        message: ''
    }
});
