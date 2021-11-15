const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});