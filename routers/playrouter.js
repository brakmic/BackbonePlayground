module.exports = Marionette.AppRouter.extend({
    routes: {
        '': 'blank',
        'home': 'blank',
        'customers': 'customers',
        'twoway': 'twoway',
        '(*path)': 'catchAll'
    }
});
