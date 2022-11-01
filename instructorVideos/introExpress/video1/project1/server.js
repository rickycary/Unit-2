// import express
const { response } = require("express")
const express = require("express")
console.log(express)

// create the application object
const app = express()

// register a middleware step (in between step)
app.use((request, response, next) => {
    console.log(request.url)
    next()
})

app.use("/static", express.static("static"))

// register a route (end step)
app.get("/", (request, response) => {
    response.send("Hello World")
})

app.get("/staticfile", (request, response) => {
    response.sendFile("/Users/rickycary/SEI/unit2/instructorVideos/introExpress/video1/project1/static/index.html")
})

app.listen(3000, () => {
    console.log("Server is listening on port 3000")
})

