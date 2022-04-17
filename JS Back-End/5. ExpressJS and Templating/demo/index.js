const express = require('express');
const logger = require('./logger');
const catalogController = require('./catalog');
const { isAdmin } = require('./auth');

const app = express();

app.use('/content', express.static('public'));
app.use(logger);

app.use('/catalog', catalogController);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/getOrder', (req, res) => {
        res.download(__dirname + '/document.pdf');
    });

app.get('/create', (req, res) => {
    res.status(201).send('<form method="POST"><label>Name:<input name="name"></label><button>Send</button></form>');
});

app.post('/create', isAdmin, (req, res) => {
    res.status(201).json({
        _id: '123dsf2d',
        name: 'Product 1',
        price: 53
    });
});

app.get('/about', (req, res) => {
    res.send('New about page'); 
});

app.get('/contact', (req, res) => {
    res.redirect('/about');
});  
  
app.all('*', (req, res) => {
    res.send('404 Custom not found page');
});

app.listen(3000);