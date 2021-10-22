// Essa função irá receber um número como parâmetro e retornar uma string como resposta;
// Quando o número passado for maior que 0 deverá retornar "positivo", quando for menor
// que 0 deverá retornar "negativo" e quando igual a 0 deverá retornar "neutro";

function defineNumber(num) {
  if(num > 0){
    return 'positivo';
  } if(num < 0){
    return 'negativo';
  } else {
    return 'neutro';
  }
};

module.exports = defineNumber;