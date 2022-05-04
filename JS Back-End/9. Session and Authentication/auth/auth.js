const bcrypt = require('bcrypt');

module.exports = () => {
    const users = {
        'stamat': {
            username: 'stamat',
            password: 333, 
        }
    };
    return (req, res, next) => {
    req.auth = {
        login,
        register
    };

    next();

    function login(username, password) {
        const user = Object.values(users).find(u => u.username == username);
        if (user && password == user.password) {
            console.log('Sucessfull login');
            req.session.user = user;
            return true;
        } else {
            return false;
        }
    }
    
    async function register(username, password) {
       if (Object.values(users).find(u => u.username == username) != undefined) {
           return false;
       } else {
           const hashPassword = await bcrypt.hash(password, 10);
           const id = 'xxxx-xxxx'.replace(/x/g, () => (Math.random() * 16 | 0).toString(16));
        const user = {
            id,
            username,
            hashPassword
        };
        users[id] = user;
        console.log('Registered user ' + username);
        
        return true;
       }
      
    }
};
};
