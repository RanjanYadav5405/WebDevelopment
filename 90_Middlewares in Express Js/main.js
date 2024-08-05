const express = require('express')
const app = express()
const port = 3000
const fs = require("fs")
const birds = require('./routes/birds')




// app.use(express.static("public"))

app.use('/birds', birds)


// Middleware 1 - Logger for iur application
app.use((req, res, next) => {
    console.log(req.headers);
    req.ranjan= "I am Ranjan bhai"
    
    fs.appendFileSync("ranjan1.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    next()
})

// Middleware 2
app.use((req, res, next) => {
    console.log('m1')
    req.ranjan = "I am Yadav bhai"
    next()
})



app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('Hello about!'+req.ranjan)
})
app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})