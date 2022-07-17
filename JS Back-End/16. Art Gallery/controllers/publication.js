const router = require('express').Router();
const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createPublication, updatePublication } = require('../services/publication');
const mapErrors = require('../util/mappers');


router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Publication', data: {} });
});

router.post('/create', isUser(), async (req, res) => {
    const publication = {
        title: req.body.title,
        technique: req.body.technique,
        picture: req.body.picture,
        certificate: req.body.certificate,
        author: req.session.user._id
    };
    try {
        await createPublication(publication);
        res.redirect('/gallery');
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Publication', data: publication, errors });
    }
});

router.get('/edit/:id', preload(), isOwner(), (req, res) => {
    res.render('edit', { title: 'Edit Publication'});
});

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;

    const publication = {
        title: req.body.title,
        technique: req.body.technique,
        picture: req.body.picture,
        certificate: req.body.certificate,
    };

    try {
        await updatePublication(id, publication)
        res.redirect('/publications/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        publication._id = id;
        res.render('edit', { title: 'Edit Publication', data: publication, errors });
    }

});


module.exports = router;