module.exports = Backbone.Model.extend({
    url: '/api/users',
    defaults: {
        name: '',
        age: 0
    },
    validate: function(attrs){
        var errors = [];
        if(attrs.age < 0){
            errors.push({name: 'user', message: 'Age must be >= 0'});
        }
        if(attrs.name === ''){
            errors.push({name: 'user', message: 'Name can\'t be empty'});
        }
        return errors.length > 0 ? errors : false;
    }
});
