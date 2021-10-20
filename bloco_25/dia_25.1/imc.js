const weight = 44;
const height = 156;

const calculateImc = () => {
  console.log(`your weight: ${weight} your height: ${height}`);
  const imc = weight / (Math.pow(height/100, 2).toFixed(2));
  console.log('');
  console.log(`your IMC is ${imc}`);
}

calculateImc();
