var BaseView = require('./baseItemView');
var EditView = require('./edit');
var Preview = require('./preview');
var templates = require('../templates/compiled');

module.exports = Marionette.LayoutView.extend({
    tagName: 'div',
    className: 'container',
    template: templates.twoway,

    regions: {
      edit: "#useredit",
      preview: '#userpreview'
    },

   onRender: function(){
      //set up the editor view
      this.edit.show(new EditView({ model: playground.user }));
      //set up the preview
      this.preview.show(new Preview({ model: playground.user }));
    }
});
