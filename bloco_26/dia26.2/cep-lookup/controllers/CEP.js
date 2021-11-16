const { application } = require('express');
const services = require('../services/CEP');

app.GET('', (req, _res, _next) => {
  const { cep } = req.params;
}) 

