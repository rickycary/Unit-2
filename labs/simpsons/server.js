const express = require('express');
// console.log(express)

const app = express();

app.get('/', (request, response) => {
    console.log("Request")
    response.send("Hello World")
})

app.get('/homer', (request, response) => {
    response.send()
})

app.get('/marge', (request, response) => {
    response.send()
})

app.get('/bart', (request, response) => {
    response.send()
})

app.get('/lisa', (request, response) => {
    response.send()
})

app.get('/maggie', (request, response) => {
    response.send()
})

app.get('/snowball-II', (request, response) => {
    response.send()
})

app.get('/santasLittleHelper', (request, response) => {
    response.send(`
    <html>
        <body>
            <h1>Santas Little Helper</h1>
        </body>
    </html>
    `)
})


app.listen(3000)