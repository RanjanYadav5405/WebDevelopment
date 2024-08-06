// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { siteName: 'Adidas', searchText: 'Search Now' });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


// app.get('/blog/:slug', (req, res) => {
//   let blogTitle="Adidas why and when ?"
//   let blogContent="Its very good brand"
//   res.render('blogpost',{blogTitle:blogTitle, blogContent:blogContent})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})