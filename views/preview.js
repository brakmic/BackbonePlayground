var BaseView = require('./baseItemView');
var templates = require('../templates/compiled');
var _s = require('underscore.string');

module.exports = BaseView.extend({
    template: templates.preview,
    tagName: 'div',
    className: 'preview',
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
    onRender: function(){
        this.stickit();
    }
});
