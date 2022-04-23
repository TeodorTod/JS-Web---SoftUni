const express = require('express');
const hbs = require('express-handlebars');
const homeController = require('./src/home');
const catalogRouter = require('./src/catalog');
const aboutController = require('./src/about');

const app = express();

app.engine('.hbs', hbs.create({
    extname: '.hbs'
}).engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({ extended: true }));
app.use('/content', express.static('static'));
app.use('/catalog', catalogRouter);

app.get('/', homeController);
app.get('/about', aboutController);


app.listen(3000, () => console.log('Server listening on port 3000'));
