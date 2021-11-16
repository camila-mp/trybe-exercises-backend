const models = require('../models/CEP');

const findByCEP = (cep) => {

  const CEP_REGEX = /\d{5}-?\d{3}/;
  const validateCEP = CEP_REGEX.test(cep);
  //verifica se o cep e valido
  if(!validateCEP) {
    return { error: { code: "invalidData", message: "CEP inválido" } };
  }

  const endereco = await models.findByCEP(cep);
  //verifica se foi encontrado o cep
  if(!endereco) {
    return { error: { code: "notFound", message: "CEP não encontrado" } }
  }
  //se o cep era valido e foi encontrado, o endereco completo e retornado
  return endereco
}

module.exports = { findByCEP };