
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')
// Add your server routes and middleware here
// For example:
 app.get('/', (req, res) => {
  res.render('pages/index')
 });

 app.get('/about', (req, res) => {
  res.render('pages/about')
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
