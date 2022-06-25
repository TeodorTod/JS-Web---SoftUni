const User = require('../models/User');
const { hash, compare } = require('bcrypt');



async function register(name, username, password) {
    const existing = await getUserByName(username);
     
    if (existing) {
        throw new Error('Username is taken');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        name,
        username,
        hashedPassword
    });

    await user.save();
    
    return user;
}

//TODO Change identifier
async function login(username, password) {
    const user = await getUserByName(username);

    if(!user) {
        throw new Error('Incorrect username or password');
    }

    const hasMatch = await compare(password, user.hashedPassword);

    if (!hasMatch) {
        throw new Error('Incorrect username or password');
    }

    return user;
}



async function getUserByName(username) {
    const user = await User.findOne({ username: new RegExp(`^${username}$`, 'i') });

    return user;
}


module.exports = {
    login, 
    register
};