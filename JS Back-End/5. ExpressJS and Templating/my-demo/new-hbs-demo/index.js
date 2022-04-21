const app = require('express')();
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
    extname: '.hbs' 
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

let visitors = 0;

const products = [
    {name: 'Widget', price: 49},
    {name: 'Gadget', price: 98},
    {name: 'Fluxor', price: 14}
];


app.get('/', (req, res) => {
    res.locals = {
        count: visitors++,
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