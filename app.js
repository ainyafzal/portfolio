// app.js, Qurat-ul-ain Afzal, 301409982, Sept 26, 2023
// Here I've included all the routes for the website
// For every other page I've contributed to, I've added some descriptions
// I've used this bootstrap template for the design: https://bootstrapmade.com/demo/Personal/
// The files under /views/css and /views/js are from the template and have minor edits done by menubar. 
// Most notibally in style.css where I create variables for the colour names for ease of changes, 
// and other small changes to customize the UI
// Note that the template was a single html page that I broke up into different ejs files in order to create different routes
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.set('view engine', 'ejs')

app.use(
  "/css",
  express.static(path.join(__dirname, "views", "css"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "views", "js"))
)
app.use(
  "/images",
  express.static(path.join(__dirname, "views", "images"))
)

// Add your server routes and middleware here
// For example:
app.get('/', (req, res) => {
  res.render('pages/index')
});
app.get('/home', (req, res) => {
  res.render('pages/index')
});

app.get('/about', (req, res) => {
  res.render('pages/about')
})
app.get('/projects', (req, res) => {
  res.render('pages/projects')
})
app.get('/services', (req, res) => {
  res.render('pages/services')
})
app.get('/contact', (req, res) => {
  res.render('pages/contact')
})
// app.get("*", (req, res) => {
//   res.render('pages/index')
//  });
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
