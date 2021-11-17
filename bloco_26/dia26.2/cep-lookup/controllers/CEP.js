const services = require('../services/CEP');

module.exports = async (req, res, next) => {
  const { cep } = req.params;
  
  try {
    const endereco = await services.findByCEP(cep);

    if(endereco.error) {
      return next(endereco.error);
    }

    return res.status(200).json(endereco);

  } catch(err) {
    next(err);
  }
};
