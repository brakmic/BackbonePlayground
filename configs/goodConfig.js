// good logger options
module.exports = {
    reporters: [{
        reporter: require('good-console'),
        args:[{ log: '*', response: '*' }]
        }]
};
