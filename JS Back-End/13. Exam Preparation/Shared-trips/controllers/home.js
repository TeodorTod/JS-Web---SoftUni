const router = require('express').Router();
const preload = require('../middleware/preload');
const { getAllTrips } = require('../services/trip');

router.get('/', (req, res) => {
    res.render('home');
});

router.get('/trips', async (req, res) => {
    const trips = await getAllTrips();
    res.render('catalog', { title: 'Shared Trip', trips });
});

router.get('/trips/:id', preload(true), (req, res) => {
    const trip = res.locals.trip;
    trip.remainingSeats = trip.seats - trip.buddies.length;
    if (req.session.user) {
        trip.hasUser = true;
        trip.isOwner = req.session.user._id == trip.owner._id;

        if (trip.buddies.some(b => b._id == req.session.user._id)) {
            trip.isJoined = true;
        }
    }
    res.render('details', { title: 'Trip Details' });
});

module.exports = router;