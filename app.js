
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.use(
  "/css",
  express.static(path.join(__dirname, "views", "css"))
)
app.use(
  "/js",
  express.static(path.join(__dirname, "views", "js"))
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
