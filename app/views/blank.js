var BaseView = require('./baseItemView');
var templates = require('../templates/templates.js');

module.exports = BaseView.extend({
    template: templates.blank,
    tagName: 'div',
    className: 'blank',
    bindings: {
       '.exec.exec-command': 'message'
    },

    events: {
        'click #command-button': 'executeCommand'
    },

    executeCommand: function(){
        window.playground.demoChannel.command('execute:command', this.model.attributes.message.toUpperCase());
    },
    onRender: function(){
        //add two-way data-binding
       this.stickit();
    }
});
