//TODO replace with actual service

const cryptoService = require('../services/crypto');

function preload(populate) {
    return async function(req, res, next) {
        const id = req.params.id;
        if (populate) {
            res.locals.crypto = await cryptoService.getCryptoAndUsersById(id);
        } else {
            res.locals.crypto = await cryptoService.getCryptoById(id);
        }
        
        next();
    };
}

module.exports = preload;