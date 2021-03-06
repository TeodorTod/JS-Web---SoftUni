const { Schema, model, Types: { ObjectId } } = require('mongoose');

//TODO Add validation

const userSchema = new Schema({
    username: { type: String, required: true },
    hashedPassword: { type: String, required: true },
    address: { type: String, required: true },
    publications: { type: [ObjectId], ref: 'Public,', default: []}

});

userSchema.index({ username: 1}, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;