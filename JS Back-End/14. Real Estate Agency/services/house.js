const House = require('../models/House');


async function getById(id) {
    return House.findById(id);
}

async function createHouse(house) {
    const result = new House(house);
    await result.save();
}

module.exports = {
    getById,
    createHouse
};