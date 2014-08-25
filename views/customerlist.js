var BaseView = require('./base');
var _ = require('underscore');
var CustomerView = require('./customer');
var templates = require('../templates/compiled');

module.exports = BaseView.extend({
    initialize: function(){
        var self = this;
        this.collection.bind("reset", this.render, this);
        this.collection.fetch({
            success: function(){
                self.render();
            }
        });
    },
    render: function(){
        this.$el.html(templates.customerlist);
        this.collection.forEach(this.addCustomer, this);
        return this;
    },
    addCustomer: function(customer){
        var customerView = new CustomerView({ model: customer, name: 'customers'});
        $('.customerlist').append(customerView.render().el);

    }
});
