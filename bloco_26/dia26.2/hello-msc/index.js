const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');
const Author = require('./models/Author');

const app = express();

const ErrorController = require('./controllers/ErrorController');
app.use(bodyParser.json());

app.get('/authors', Author.getAll);
app.get('/authors/:id', Author.findById);
app.post('/authors', Author.create);

app.use(ErrorController);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});