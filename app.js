const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const bookRoute = require('./routes/books.routes');

require('dotenv').config();

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URL);


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => {
  res.render('index.pug', {
    name: 'vsvas',
  });
});

app.use('/books', bookRoute);

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port: ${port}`);
});
