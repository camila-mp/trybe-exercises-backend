// reecrevendo o codigo do exercicio2 com async/await

const exercicio1 = require('./exercicio1');

const generateRandomNums = async () => {
  const numerosAleatorios = 3;
  const arrayNumeros = [];

  for(let i = 1; i <= numerosAleatorios; i++){
    const num = Math.floor(Math.random() * 100 + 1);
    arrayNumeros.push(num);
  }
  try {
    const resposta = await exercicio1(arrayNumeros[0], arrayNumeros[1], arrayNumeros[2]);
    await console.log(resposta);
  } catch(error) {
    console.log(error)
  }
}

generateRandomNums()
