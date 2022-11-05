const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/:freeSamples', (request, response) => {
    console.log(request.params.freeSamples)
    response.send('here are some free samples')
})


app.listen(PORT, () => {
    console.log(`listening in port ${PORT}`)
})