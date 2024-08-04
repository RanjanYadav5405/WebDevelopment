const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)



//Chaining of requests
app.get('/', (req, res) => {
  res.send('Hello World5405!')
}).post('/', (req, res) => {
  res.send('Hello World post!')
}).put('/', (req, res) => {
  res.send('Hello World put !')
}).delete('/', (req, res) => {
  res.send('Hello World delete!')
})

// Serving HtmlFile

app.get("/index", (req,res) =>{
    console.log("Hey its index")
    res.sendFile(`templates/index.html`, {root: __dirname})
})

app.get("/api", (req,res) =>{
    res.json({a:1, b:2, c:4, d:6, name:["Ranjan","Yadav"]})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})