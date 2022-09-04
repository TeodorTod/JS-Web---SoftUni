const router = require('express').Router();
const { isUser, isGuest } = require('../middleware/guards');
const { register, login } = require('../services/user');
const mapErrors = require('../util/mappers');


router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

//TODO Check form action, method, field names
router.post('/register', isGuest(), async (req, res) => {
    try {
        if (req.body.password.trim() == '') {
            throw new Error('Password is required');
        }
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords don\'t match');
        }
        
        const user = await register(req.body.email, req.body.username, req.body.password);
        req.session.user = user;
        res.redirect('/'); 
    } catch (err) {
        console.error(err);
        //TODO send error messages
        const errors = mapErrors(err);
        res.render('register', { data: { email: req.body.email, username: req.body.username }, errors });
    }

});

router.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

//TODO Check form action, method, field names
router.post('/login', isGuest(), async (req, res) => {
    try {
        const user = await login(req.body.email, req.body.password);
        req.session.user = user;
        res.redirect('/'); 
    } catch (err) {
        console.error(err);
        //TODO send error messages
        const errors = mapErrors(err);
        res.render('login', { data: { email: req.body.email }, errors });
    }
});

router.get('/logout', isUser(), (req, res) => {
    delete req.session.user;
    res.redirect('/');
});

module.exports = router;