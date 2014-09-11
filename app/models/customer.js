var _ = require('underscore');

module.exports = Backbone.Model.extend({
    defaults: {
       id: '',
       isActive: '',
       picture: '',
       age: '',
       firstName: '',
       lastName: '',
       gender: '',
       company: '',
       email: '',
       phone: '',
       street: '',
       streetNo: '',
       zipCode: '',
       city: '',
       state: '',
       country: '',
       about: '',
       registered: '',
       latitude: '',
       longitude: '',
       tags: [
           'tag1',
           'tag2'
       ]
    }
    /*initialize: function(options){
        if(options){
            this.id = options.id;
        }else{
            this.id = "m" + _.unique();
        }
    }*/
});
