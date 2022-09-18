const { Schema, model, Types: { ObjectId } } = require('mongoose');

const cryptoSchema = new Schema({
    name: { type: String, required: true},
    image: { type: String, required: true},
    price: { type: Number, required: true},
    description: { type: String, required: true},
    method: {},
    owner: { type: ObjectId, ref: 'User', required: true }, 
    buyCrypto: { type: [ObjectId], ref: 'User', default: [] }, 
});

const Crypto = model('Crypto', cryptoSchema);

module.exports = Crypto;

