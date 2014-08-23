var BaseView = require('./base');
var templates = require('../templates/compiled');
var Header = require('./header');

module.exports = BaseView.extend({

    events: {
        'click input[type=button]': 'clickReact'
    },

    render: function(){
        this.$el.html(templates.main);
        this.headerView = new Header({ el: 'header'});
        this.headerView.render();
        return this;
    },

    clickReact: function(e){
        alert('Click on ' + e.currentTarget.id);
    }
});
