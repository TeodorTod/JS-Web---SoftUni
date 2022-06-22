const authController = require('../controllers/auth');
const homeController = require('../controllers/house');

module.exports = (app) => {
    app.use(authController);
    app.use(homeController);


    app.get('*', (req, res) => {
        res.render('404', { tite: 'Page not found' });
    });
};