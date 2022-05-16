const { Schema, model, Types: { ObjectId } } = require('mongoose');

const carSchema = new Schema({
    name: { type: String, required: [true, 'Listing name is required'], minlength: [3, 'Name must be at least 3 charcters long'] }, 
    description: { type: String, default: 'no_image.jpg' },
    imageUrl: { type: String },
    price: { type: Number, required: true, min: 0 },
    accessories: { type: [ObjectId], default: [], ref: 'Accessory' },
    isDeleted: { type: Boolean, default: false },
    owner: { type: ObjectId, ref: 'User' }
});

const Car = model('Car', carSchema);


module.exports = Car;
