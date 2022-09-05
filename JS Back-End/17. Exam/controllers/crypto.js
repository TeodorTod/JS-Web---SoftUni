const { isUser, isOwner } = require('../middleware/guards');
const { createCrypto, updateCrypto, deleteById } = require('../services/crypto');
const mapErrors = require('../util/mappers');
const preload = require('../middleware/preload');

const router = require('express').Router();


router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Announcement', data: {} });
});

router.post('/create', isUser(), async (req, res) => {
    const crypto = {
        name: req.body.name, 
        image: req.body.image, 
        price: Number(req.body.price), 
        description: req.body.description,
        owner: req.session.user._id
    }
    
    try {
        await createCrypto(crypto);
        res.redirect('/catalog')
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        res.render('create', { title: 'Create Announcement', data: crypto, errors });
    }

});

router.get('/edit/:id', preload(), isOwner(), (req, res) => {
    res.render('edit', { title: "Edit Crypto"});
})

router.post('/edit/:id', preload(), isOwner(), async (req, res) => {
    const id = req.params.id
    const crypto = {
        name: req.body.name, 
        image: req.body.image, 
        price: Number(req.body.price), 
        description: req.body.description
    }

    try {
        await updateCrypto(id, crypto);
        res.redirect('/catalog/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        crypto._id = id;
        res.render('edit', { title: 'Edit Announcement', crypto, errors });
    }
    
})

router.get('/delete/:id', preload(), isOwner(), async (req, res) => {
    await deleteById(req.params.id);
    res.redirect('/catalog');
})


module.exports = router;