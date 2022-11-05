require('dotenv').config();
const express = require('express')
const app = express()
const PORT = process.env.PORT;
console.log(process.env.PORT)


const plants = [
    'Monstera Deliciosa', 
    'Corpse Flower', 
    'Elephant-Foot Yam', 
    "Witches' Butter",
];


app.get('/awesome', (request, response) => {
    response.send(`<h1>Plants are awesome!!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
    `)
})


app.get('/:indexOfPlantsArray', (request, response) => {
    if(plants[request.params.indexOfPlantsArray]){
        response.send(plants[request.params.indexOfPlantsArray])
    }else {
        response.send('cannot find anything in index' + request.params.indexOfPlantsArray)
    }
})


// Example #1 of multiple parameters 
app.get('/:ia/:instructor', (request, response) =>{
    console.log(request.params)
    response.send(`the ia is ${request.params.ia} and the instrcutor is ${request.params.instructor}`)
})


// Example #2 of multiple parameters
app.get('/hello/:firstname/:lastname', (request, response) => {
    response.send(`hello my name is ${request.params.firstname} ${request.params.lastname}`)
})

//req.query example 
app.get('/reqqueryexample/:firstname/:lastname', (request, response) => {
    console.log('The request.query is ' + request.query.title + " " +  request.query.house + ' and not to be confused w/ request.params. This is request.query')
    console.log(request.query)
    response.send(`hello my name is ${request.params.firstname} ${request.params.lastname} and my title is ${request.query.title}`)
})


app.listen(PORT, () => {
    console.log(`listening on port', ${PORT}`);
})