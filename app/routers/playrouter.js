module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'blank',
        'home': 'blank',
        'customers': 'customers',
        'twoway': 'twoway',
        'download/*filename': 'download',
        '(*path)': 'catchAll'
    }
});
