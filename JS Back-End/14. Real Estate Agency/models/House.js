const { Schema, model, Types: { ObjectId } } = require('mongoose');

const URL_PATTERN = /^https?:\/\/(.+)/;

const houseSchema = new Schema({
    name: { type: String, required: true },
    type:  { type: String, enum: ['Apartament', 'Villa', 'House'], required: true },
    year: { type: Number, required: true },
    city: { type: String, required: true },
    homeImage: { type: String, required: true },
    description: { type: String, required: true },
    availablePieces: { type: Number, required: true },
    rentedAHome: { type: [ObjectId], ref: 'User', default: [] },
    owner: { type: ObjectId, ref: 'User', required: true }
});

const House = model('House', houseSchema);

module.exports = House;