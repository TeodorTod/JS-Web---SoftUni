const router = require('express').Router();
const preload = require('../middleware/preload');
const { getAllPublications } = require('../services/publication');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/gallery', async (req, res) => {
    const publications = await getAllPublications();
    res.render('gallery', { title: 'Art Gallery', publications });
});

router.get('/publications/:id', preload(true), (req, res) => {
    if (req.session.user) {
        res.locals.publication.hasUser = true;
        res.locals.publication.isOwner = req.session.user._id == res.locals.publication.author._id
    }

    res.render('details', { title: 'Publication details'});
});


module.exports = router;