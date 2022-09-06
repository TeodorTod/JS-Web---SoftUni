const { getAllCryptos } = require('../services/crypto');

const router = require('express').Router();
const preload = require('../middleware/preload')


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/catalog', async (req, res) => {
    const cryptos = await getAllCryptos();
    res.render('catalog', { title: 'All Cryptos', cryptos})
});

router.get('/catalog/:id', preload(true), (req, res) => {
    if (req.session.user) {
        res.locals.crypto.hasUser = true;
        res.locals.crypto.isOwner = req.session.user._id == res.locals.crypto.owner._id;
    }
    res.render('details', { title: 'Crypto details'});
});


module.exports = router;