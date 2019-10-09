const express = require('express')
const app = express()
const port = 8080

app.use('/assets', express.static(__dirname + '/assets'))

app.get('/', function(req,res) {
    res.sendFile(__dirname + '/views/index.html')
})

app.listen(port, () => console.log(`Example app listening on localhost:${port}!`))
