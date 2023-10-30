const express = require("express")
const app = express()
var cors = require('cors')
// const http = require('http');
var request = require('request');
const bodyParser = require('body-parser');
// var functions = require('firebase-functions')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var openAiLink = "https://api.openai.com/v1/chat/completions"
app.use(cors())

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
    res.send("<h1>Hello World!</h1>")
})

app.get('/test', (req, res) => {
    res.send("up and running")
})

app.post('/getOpenAI', (req, res) => {
    var clientServerOptions = {
        url: openAiLink,
        body: JSON.stringify(req.body),
        method: 'POST',
        headers: {
            "Authorization": `Bearer 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`,
            "Content-Type": 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, GET, PUT",
            "Access-Control-Allow-Headers": "Content-Type",
                }
    }
    
    request(clientServerOptions, function (error, response) {
        res.send(response.body)
    });
})


// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));