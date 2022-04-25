const { Schema, model } = require("mongoose");

const carSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0,
        min: [0, 'Price cannot be negative! Attemted to set price {VALUE}']
    },
    
});

carSchema.methods.startEngine = function () {
    console.log(`${this.name} goes Vroom!`);
};

carSchema
    .virtual("VAT")
    .get(function () {
        return this.price * 0.2;
    })
    .set(function (value) {});

carSchema.path('price').validate(function (value) {
    return value >= 0;
}, 'Price cannot be negative num');

const Car = model("Car", carSchema);

module.exports = Car;