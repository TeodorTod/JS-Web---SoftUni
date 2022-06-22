const router = require('express').Router();
const { isUser } = require('../middleware/guards');
const { createHouse } = require('../services/house');
const mapErrors = require('../util/mappers');



router.get('/', (req, res) => {
    res.render('home');
});

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Add new home', data: {} });
});

router.post('/create', isUser(), async (req, res) => {
    const house = {
        name: req.body.name,
        type: req.body.type,
        year: req.body.year,
        city: req.body.city,
        homeImage: req.body.homeImage,
        description: req.body.description,
        availablePieces: req.body.availablePieces,
        owner: req.session.user._id
    };

    try {
        await createHouse(house);

        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Add new home', create: house, errors });
    }
});

router.get('/catalog', (req, res) => {
    res.render('catalog');
});


module.exports = router;

