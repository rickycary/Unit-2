const express = require('express')
// console.log(express)
const app = express()

app.get('/homer', (request, response) => {
    response.send("Doh")
})

app.get('/marge', (request, response) => {
    response.send("blue hair")
})

app.get('/bart', (request, response) => {
    response.send("eat my shorts")
})

app.get('/lisa', (request, response) => {
    response.send("big brains")
})

app.get('/maggie', (request, response) => {
    response.send("baby noises")
})

app.get('/snowball-2', (request, response) => {
    response.send(`<html>
    <body>
        <h1>Oh ha!</h1>
        <h2>Gotcha</h2>
    </body>
</html>
`)
})


app.listen(3000, () => {
    console.log("Simpsons")
})