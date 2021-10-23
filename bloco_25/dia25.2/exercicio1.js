// Crie uma função que recebe três parâmetros retorna uma Promise .
// Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
// Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
// Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
// Caso o resultado seja maior que 50, resolva a Promise com o valor obtido.

const exercicio1 = (num1, num2, num3) => {
  return(
    new Promise((resolve, reject) => {
      if(typeof num1 !== 'number' || typeof num2 !== 'number' || typeof num3 !== 'number') {
        return reject('Informe apenas números');
      }
      const calculo = (num1 + num2) * num3;
      if(calculo < 50) {
        return reject("valor muito baixo");
      } else {
        return resolve(`o resultado é ${calculo}`);
      }
    })
  )
}

module.exports = exercicio1;
