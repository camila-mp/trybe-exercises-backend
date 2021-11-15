const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/ping', (_req, res) => res.status(200).json({ 'message': 'pong!' }));

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});