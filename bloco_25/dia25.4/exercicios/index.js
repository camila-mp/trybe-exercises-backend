// 1 - Crie uma rota GET /ping. Sua rota deve retornar o seguinte JSON: { message: 'pong' }

const express = require('express');

const app = express();



// body parser
app.use(bodyParser.json()); 

// rotas
app.get('/ping', (_req, res) =>  res.json({ mesage: 'pong' }));

// middleware de erros
app.use(function (err, req, res, next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => {
  console.log('Aplicaçao ouvindo na porta 3000')
})