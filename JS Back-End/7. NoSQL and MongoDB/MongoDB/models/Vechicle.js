const { Schema, model } = require('mongoose');

const vehicleSchema = new Schema({
    name: { type: String, required: true },
    price: { 
        type: Number, 
        default: 0,
        min: [0, `Price cannot be negative. Attemted to set price {VALUE}`]
    }
});

vehicleSchema.methods.startEngine = function () {
    console.log(`${this.name} goes vroom`);
};

vehicleSchema.virtual('VAT').get(function() {
    return this.price * 0.2;
});

const Vechicle = model('Vechicle', vehicleSchema);

module.exports = Vechicle;