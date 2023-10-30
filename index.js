// const express = require('express')
// var cors = require('cors')
// const http = require('http');
// var request = require('request');
// const bodyParser = require('body-parser');
// var functions = require('firebase-functions')
// const app = express()
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
// const port = 3000

// var corsOptions = {
//     origin: ['http://localhost:4200', 'https://miniauglarsite.web.app'],
//     optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// var openAiLink = "https://api.openai.com/v1/chat/completions"
// app.use(cors())

// app.post('/getOpenAI', cors(corsOptions), (req, res) => {
//     var clientServerOptions = {
//         url: openAiLink,
//         body: JSON.stringify(req.body),
//         method: 'POST',
//         headers: {
//             "Authorization": `Bearer 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`,
//       "Content-Type": 'application/json',
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "POST, GET, PUT",
//       "Access-Control-Allow-Headers": "Content-Type",
//           }
//     }
    
//     request(clientServerOptions, function (error, response) {
//         res.send(response.body)
//     });
// })

// app.get('/test', (req, res) => {
//     res.send("up and running")
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// exports.app = functions.https.onRequest(app);
const express = require("express")
var cors = require('cors')
const app = express()
const express = require('express')
var cors = require('cors')
const http = require('http');
var request = require('request');
// const bodyParser = require('body-parser');
// var functions = require('firebase-functions')
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())

var corsOptions = {
    origin: ['http://localhost:4200', 'https://miniauglarsite.web.app'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
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