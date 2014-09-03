//var PlayController = require('../controllers/playcontroller');

module.exports = Marionette.AppRouter.extend({
    appRoutes: {
        '': 'blank',
        'home': 'blank',
        'customers': 'customers',
        'twoway': 'twoway',
        '(*path)': 'catchAll'
    }
});
