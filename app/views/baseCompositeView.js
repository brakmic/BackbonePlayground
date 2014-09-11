module.exports = Marionette.CompositeView.extend({
    tagName: 'div',
    className: 'base-composite-view',
    onRender: function(){

        //a workaround taken from:
        // http://stackoverflow.com/questions/14656068/turning-off-div-wrap-for-backbone-marionette-itemview

        // Get rid of that pesky wrapping-div.
        // Assumes 1 child element present in template.
        this.$el = this.$el.children();
        // Unwrap the element to prevent infinitely
        // nesting elements during re-render.
        this.$el.unwrap();
        this.setElement(this.$el);
    }
});
