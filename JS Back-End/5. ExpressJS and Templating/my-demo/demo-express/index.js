const express = require('express');

const catalogController = require('./catalog'); 
const logger = require('./logger');
const app = express();

app.use(logger);

app.get('/', (req, res) => {
    res.download(__dirname + '/index.html');
});

app.get('/getOrder', (req, res) => {
    res.download(__dirname + '/offer.pdf');
});

app.post('/create', (req, res) =>{
    res.status(201).json({
        name: 'Ivan',
        age: 32
    });
});

app.all('*', (req, res) => {
    res.send('404 Not Found');
});

app.listen(3000);