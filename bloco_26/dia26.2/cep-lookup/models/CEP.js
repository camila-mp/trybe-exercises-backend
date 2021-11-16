const connection = require('./connection');

const validateCep = /\d{5}-\d{3}/;
// const cep = 13501-160

const formatCEP = (cep) => {
  const isCEPvalid = cep.test(validateCep);
  if(isCEPvalid) {
    return cep;
  }

  const formatedCEP = cep.subString(0, 5) + '-' + cepStr.subString(5, 9)
  return formatedCEP;
}

