var BaseView = require('./base');
var templates = require('../templates/compiled');
var _s = require('underscore.string');

module.exports = BaseView.extend({
    bindings: {
        '.preview.firstName': 'firstName',
        '.preview.lastName': 'lastName',
        '.preview.email': 'email',
        '.preview.homepage': {
            observe: 'homepage',
            update: function ($el, val, model, options) {
                $el.text(val);
                if(!_s.startsWith(val, 'http')) {
                    val = 'http://' + val;
                }
                $el.prop('href', val);
            }
        }

    },
    render: function(){
        this.$el.html(templates.preview);
        this.stickit();
        return this;
    }
});
