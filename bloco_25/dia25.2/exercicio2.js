// Escreva um código para consumir a função construída no exercício anterior.
// Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório,
// utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
// Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
// Utilize then e catch para manipular a Promise retornada pela função:
// Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
// Caso a Promise seja resolvida, escreva na tela o resultado do cálculo.
const exercicio1 = require('./exercicio1');

const generateRandomNums = () => {
  const numerosAleatorios = 3;
  const arrayNumeros = [];

  for(let i = 1; i <= numerosAleatorios; i++){
    const num = Math.floor(Math.random() * 100 + 1);
    arrayNumeros.push(num);
  }
  return exercicio1(arrayNumeros[0], arrayNumeros[1], arrayNumeros[2])
    .then((resultado) => console.log(resultado))
    .catch((erro) => console.log(erro))
}

module.exports = generateRandomNums;
