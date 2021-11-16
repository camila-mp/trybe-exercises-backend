const connection = require('./connection');

const validateCep = /\d{5}-\d{3}/;

const formatCEP = (cep) => {
  const isCEPvalid = validateCep.test(cep);
  if(isCEPvalid) {
    return cep;
  }

  const formatedCEP = cep.subString(0, 5) + '-' + cepStr.subString(5, 9)
  return formatedCEP;
}

const getNewCEP = ({cep, logradouro, bairro, localidade, uf}) => ({
  cep: formatCEP(cep),
  logradouro,
  bairro,
  localidade,
  uf,
});

const findByCEP = async (cep) => {
  const modifiedCEP = cep.replace('-', '');
  const myQuery = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep = ?';
  const endereco = await connection.execute(myQuery, [modifiedCEP])
    .then(([result]) => (result.length ? result[0] : null))
  
  if(!endereco) {
    return null;
  }
  return getNewCEP(endereco);
}

module.exports = { findByCEP };