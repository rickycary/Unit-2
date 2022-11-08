const express = require('express');
const app = express();

const fruits = ['apple', 'banana', 'pear'];

app.get('/fruits', (request, response) => {
    response.send(fruits);
});

app.listen(3000, () => {
    console.log('listening');
});