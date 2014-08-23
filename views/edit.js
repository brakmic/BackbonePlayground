var BaseView = require('./base');
var templates = require('../templates/compiled');

module.exports = BaseView.extend({

    bindings: {
       '.edit.firstName': 'firstName',
       '.edit.lastName': 'lastName',
       '.edit.email': 'email',
       '.edit.homepage': 'homepage'
    },

    render: function(){
        this.$el.html(templates.edit);
        this.stickit();
        return this;
    }
});
