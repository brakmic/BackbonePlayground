module.exports = Backbone.View.extend({
        tagName: 'div',
        name: 'unknown',
        class: 'playground',
        initialize: function(options){
            this.options = options || {};
            this.name = options.name;
            if(this.name) {
                console.log('Initializing view: ' + this.name);
            }
        }
});
