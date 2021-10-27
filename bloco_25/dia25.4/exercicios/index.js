// 1-Crie uma rota GET /ping. Sua rota deve retornar o seguinte JSON: { message: 'pong' }
// 2-Crie uma rota POST /hello
// 2-Sua rota deve receber, no body da requisição, o seguinte JSON: { "name": "<nome do usuário>" }
// 2-Sua rota deve retornar o seguinte JSON: { "message": "Hello, <nome do usuário>!" } 

// 3-Crie uma rota POST /greetings
// Sua rota deve receber o seguinte JSON: { "name": "<nome do usuário>", "age": <idade do usuário> } .
// Caso a pessoa usuária tenha idade superior a 17 anos, devolva o JSON { "message": "Hello, <nome do usuário>!" } com o status code 200 - OK .
// Caso a pessoa usuária tenha 17 anos ou menos, devolva o JSON { "message": "Unauthorized" } com o status code 401 - Unauthorized .


const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// body parser
app.use(bodyParser.json()); 

// rotas
app.get('/ping', (_req, res) =>  res.json({ message: 'pong' }));
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}!` })
});
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if(parseInt(age, 10) <= 17) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  return res.status(200).json({ message: `Hello, ${name}!` });
})


// middleware de erros
app.use(function (err, req, res, next) {
  return res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log('Aplicaçao ouvindo na porta 3000'))