const houseService = require('../services/house');

function preload() {
    return async function(req, res, next) {
        const id = req.params.id;
        // TODO Chamge property name tomatch collection
        const house = await houseService.getById(id);
        res.locals.house = house;
        
        next();
    };
}

module.exports = preload;