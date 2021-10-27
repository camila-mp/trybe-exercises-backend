// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor
// que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";

function defineNumber(num) {
  if(num > 0){
    return 'positivo';
  } else if(num < 0){
    return 'negativo';
  } else if(num === 0) {
    return 'neutro';
  } else if(typeof num !== 'number') {
    return 'o valor deve ser um número';
  }
};

module.exports = defineNumber;