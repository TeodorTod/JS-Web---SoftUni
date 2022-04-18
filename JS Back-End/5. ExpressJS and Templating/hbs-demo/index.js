const app = require('express')();
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
    extname: '.hbs',

});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

let visitors = 0;

const products = [
    {name: 'Banana', price: 3},
    {name: 'Tomato', price: 6},
    {name: 'Cucumber', price: 5}
];

app.get('/', (req, res) => {
    res.locals = {
        count: visitors++,
        user: {
            username: 'Peter',
            email: 'pet@abv.bg'
        }
    };
    res.render('home');
});

app.get('/catalog', (req, res) => {
    res.locals = {
        products
    };
    res.render('catalog');
});

app.listen(3000);