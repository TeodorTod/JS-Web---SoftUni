const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.send('Catalog page');
});

router.get('/:productId', (req, res) => {
    res.send(req.params);
    res.send('Product page');
});

router.get('/*/details', (req, res) => {
    res.send('Product one');
});

module.exports = router;