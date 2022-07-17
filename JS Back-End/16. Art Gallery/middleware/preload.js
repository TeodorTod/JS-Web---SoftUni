const collectionService = require('../services/publication');

function preload(populate) {
    return async function(req, res, next) {
        const id = req.params.id;

        if (populate) {
            res.locals.publication = await collectionService.getPublicationAndUsers(id);
        } else {
            res.locals.publication = await collectionService.getPublicationById(id);
        }
        
        next();
    };
}

module.exports = preload;