var BaseView = require('./base');
var templates = require('../templates/compiled');

module.exports = Backbone.Marionette.ItemView.extend({

    template: templates.blank

    /*MarionetteJS provides a render() function
    -------------------------------------------*/
    /*render: function(){
        this.$el.html(templates.blank);
        return this;
    }*/
});
