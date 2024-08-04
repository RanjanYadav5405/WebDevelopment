const express = require('express')
const app = express()
const port = 3000

// Static Files it can on server nut it works like middleware
app.use(express.static('public'))

//app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About')
  })

  app.get('/contact', (req, res) => {
    res.send('Hello contact me')
  })
  app.get('/blog', (req, res) => {
    res.send('Hello blog!')
  })
 
app.get("/blog/:slug", (req, res) => {
    //logic to fetch {slug} from the db
        // console.log(req)

    // For URL: http://127.0.0.1:3000/blog/nepal?mode=black&region=nepal
    console.log(req.params) // will output {slug: "nepal"}
    console.log(req.query)  // will output {mode: 'dark', region:'nepal'}

    res.send(`hello ${req.params.slug}`)
    // res.send(`hello ${req.params.slug} and ${req.params.second} `)
})




  app.get('/blog/intro-to-js', (req, res) => {
    // logic to fetch intro to js from the db
    res.send('Hello intro-to-js!')
})

app.get('/blog/intro-to-python', (req, res) => {
    // logic to fetch intro to python from the db
    res.send('Hello intro-to-python!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})