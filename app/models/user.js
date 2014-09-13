module.exports = Backbone.Model.extend({
    url: '/api/users',
    defaults: {
        firstName: 'Harris',
        lastName: 'Brakmic',
        email: 'brakmic@gmail.com',
        homepage: 'brakmic.de'
    },

    validate: function(attrs){
        var errors = [];
        if(!attrs.firstName){
            errors.push({name: 'user', message: 'First name can\'t be empty'});
        }
        if(!attrs.lastName){
            errors.push({name: 'user', message: 'Last name can\'t be empty'});
        }
        if(!attrs.email){
            errors.push({name: 'user', message: 'E-Mail can\'t be empty'});
        }
        if(!attrs.homepage){
            errors.push({name: 'user', message: 'Homepage can\'t be empty'});
        }
        return errors.length > 0 ? errors : false;
    }
});
