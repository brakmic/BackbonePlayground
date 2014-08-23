var BaseView = require('./base');
var templates = require('../templates/compiled');

module.exports = BaseView.extend({

    render: function(){
        this.$el.html(templates.demo);
        return this;
   }
});
