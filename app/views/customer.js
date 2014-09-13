var BaseView = require('./baseItemView');
var templates = require('../templates/compiled/templates.js');

module.exports = BaseView.extend({
        template: templates.includes.customer,
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
    onRender: function(){
        //add two-way data-binding
        this.stickit();
    }
});
