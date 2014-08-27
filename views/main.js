var BaseView = require('./base');
var templates = require('../templates/compiled');
var Header = require('./header');

module.exports = BaseView.extend({

    events: {
        'click a': "clicked"
    },

    render: function(){
        this.$el.html(templates.main);
        this.headerView = new Header({ el: 'header'});
        this.headerView.render();
        return this;
    },

    clicked: function(e){
        var href = $(e.currentTarget).attr('href');
        var protocol = e.currentTarget.protocol + '//';

        if (href.slice(protocol.length) !== protocol) {
            if ($(e.currentTarget).hasClass('menu-item')) {
                e.preventDefault();
                $('.active-menu').removeClass('active-menu');
                $(e.currentTarget).addClass('active-menu');
                Backbone.history.navigate(href, true);
            }
        }
    }
});
