const { Router } = require("express");

const router = Router();

router.get('/', (req, res) => {
    res.send('Catalog page');
});

router.get('/:productId', (req, res) => {
    console.log(req.params);
    res.send('Product page');
});

router.get('/:id/details', (req, res) => {
    console.log(req.params);
    res.send('Details page');
});

module.exports = router;