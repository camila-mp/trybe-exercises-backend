const readline = require('readline-sync');

const weight = readline.questionInt('Qual seu peso? ');
const height = readline.questionInt('Qual sua altura? ');

const calculateImc = (w, h) => {
  console.log(`your weight: ${w} your height: ${h}`);
  const imc = w / (Math.pow(h/100, 2).toFixed(2));
  console.log('');
  console.log(`your IMC is ${imc}`);
}

calculateImc(weight, height);
