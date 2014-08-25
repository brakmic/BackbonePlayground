var BaseView = require('./base');
var EditView = require('./edit');
var Preview = require('./preview');
var UserInfo = require('../models/user');
var templates = require('../templates/compiled');

module.exports = BaseView.extend({

   initialize: function(options){
       console.log('Initializing: ' + options.name);
       //set the view's name for console logging
       // (see views/base.js for more info)
       this.name = options.name;
       app.user = new UserInfo();

   },

   render: function(){
       this.$el.html(templates.twoway);
       //set up the editor view
       this.editView = new EditView({ model: app.user, el: '.useredit', name: 'edit'});
       this.editView.render();
       //set up the preview
       this.preview = new Preview({ model: app.user, el: '.userpreview', name: 'preview' });
       this.preview.render();

       return this;
   },

    remove: function(){
        //clean up all subviews before removing this view
        console.log('Cleaning up all subviews before closing the TwoWay-View');
        this.editView.remove();
        this.preview.remove();
    }
});
