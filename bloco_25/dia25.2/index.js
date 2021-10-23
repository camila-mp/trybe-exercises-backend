const exercicio1 = require("./exercicio1");
const generateRandomNums = require("./exercicio2");

const main1 = () => {
  return exercicio1(7, 15, 10)
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));
};

const main2 = () => {
  return generateRandomNums();
}

main1();
main2();