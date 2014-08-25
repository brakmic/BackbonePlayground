var BaseView = require('./base');
var templates = require('../templates/compiled');

module.exports = BaseView.extend({
        tagName: 'li',
        className: 'list-group-item',
        bindings: {
        '.customer.picture': {
          observe: 'picture',
          update: function ($el, val, model, options) {
              $el.prop('src', val);
          }
        },
       '.customer.firstName': 'firstName',
       '.customer.lastName': 'lastName',
       '.customer.email': 'email',
       '.customer.phone': 'phone',
       '.customer.city': 'city'
    },
    initialize: function(options){
      this.model.on('change', this.render, this);
    },
    render: function(){
        this.$el.html(templates.includes.customer);
        this.stickit();
        return this;
    }
});
