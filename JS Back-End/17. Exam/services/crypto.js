const Crypto = require('../models/Crypto');



async function getAllCryptos() {
    return Crypto.find({}).lean();
}

async function getCryptoById(id) {
    return Crypto.findById(id).lean();
}

async function getCryptoAndUsersById(id) {
    return Crypto.findById(id).populate('owner').populate('buyCrypto').lean();
}

async function createCrypto(crypto) {
    const result = new Crypto(crypto);
    await result.save();
}

async function updateCrypto(id, crypto) {
    const existing = await Crypto.findById(id);

    existing.name = crypto.name;
    existing.image = crypto.image; 
    existing.price = crypto.price; 
    existing.description = crypto.description;

    await existing.save();
}

async function deleteById(id) {
    await Crypto.findByIdAndDelete(id);
};

module.exports = {
    getAllCryptos,
    getCryptoById,
    createCrypto,
    getCryptoAndUsersById,
    updateCrypto,
    deleteById,
}