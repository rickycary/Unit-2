// require our dependencies 
const express = require('express');

// console.log(express)

// initialize the express app
const app = express();



app.get('/', (request, response) => {
    console.log("Oh hey I got a request. Hey I have added Nodemon")
    response.send("Hello World")
})

app.get('/ricky', (request, response) => {
    console.log("Ricky got a request")
    response.send("Hello Ricky")
})

app.listen(3000, () => {
    console.log("Express is listening for requests from the browser")
});