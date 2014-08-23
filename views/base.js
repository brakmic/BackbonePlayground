module.exports = Backbone.View.extend({
        tagName: 'div',
        name: 'unknown',
        initialize: function(options){
            this.name = options.name;
            console.log('Initialize view: ' + this.name);
        }
});
