const express = require ("express");
const app = express();
const path = require ("path");
const port = 80;
app.set('view engine', 'pug')
app.use('/static', express.static(path.join(__dirname, 'static')))


app.get('/', function (req, res) {
    res.render('index')
  })
  app.get('/contact', function (req, res) {
    res.render('contact')
  })
  app.listen(port, () => {
    console.log(`Website is Successfully loaded at  http://localhost:${port}`)
  })