var _ = require('underscore');
var templates = require('../../templates/compiled');

module.exports = Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'marionette-app',
    id: 'main-layout',
    template: templates.marionette.main_layout,
    regions: {
        headerRegion: '#header-region',
        sidebarRegion: '#sidebar-region',
        mainRegion: '#main-region'
    },
    events: {
        'click a': "clicked"
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
