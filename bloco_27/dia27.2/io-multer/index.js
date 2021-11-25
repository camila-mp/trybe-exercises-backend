require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const multer = require('multer');
const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// --------
app.use(express.static(`${__dirname}/uploads`));
const upload = multer({ dest: 'uploads' });

const uploadEnvios = multer({ dest: 'envios' });

app.post('/files/upload', upload.single('file'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file }));

app.post('/envios', uploadEnvios.single('fileEnvios'), (req, res) =>
  res.status(200).json({ body: req.body, file: req.file }));
// --------
app.get('/ping', controllers.ping);

app.use(middlewares.error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
