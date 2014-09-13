var BaseView = require('./baseItemView');
var templates = require('../templates/templates.js');

module.exports = BaseView.extend({
    template: templates.edit,
    tagName: 'div',
    className: 'edit',
    bindings: {
       '.edit.firstName': 'firstName',
       '.edit.lastName': 'lastName',
       '.edit.email': 'email',
       '.edit.homepage': 'homepage'
    },

    onRender: function(){
        this.stickit();
    }
});
