const authController = require('../controllers/auth');
const cryptoController = require('../controllers/crypto');
const homeController = require('../controllers/home');

module.exports = (app) => {
    app.use(authController);
    app.use(cryptoController);
    app.use(homeController);

    app.get('*', (req, res) => {
        res.render('404', { title: 'Page Not Found'})
    });
};