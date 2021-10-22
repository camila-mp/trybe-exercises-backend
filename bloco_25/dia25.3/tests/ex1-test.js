const { assert, expect } = require('chai');
const defineNumber = require('../exercicio1');

describe('o parâmetro passado é menor que zero', () => {
  describe('a resposta', () => {
    const resposta = defineNumber(-1);

    it('o retorno será do tipo string', () => {
      expect(resposta).to.be.a('string');
    })
    it('o retorno será negativo na forma de string', () => {
      expect(resposta).equals('negativo');
    })
  })
})

describe('o parâmetro passado é maior que zero', () => {
  describe('a resposta', () => {
    const resposta = defineNumber(1);

    it('o retorno será do tipo string', () => {
      expect(resposta).to.be.a('string');
    })
    it('o retorno será positivo na forma de string', () => {
      expect(resposta).equals('positivo');
    })
  })
})

describe('o parâmetro passado é igual a zero', () => {
  describe('a resposta', () => {
    const resposta = defineNumber(0);

    it('o retorno será do tipo string', () => {
      expect(resposta).to.be.a('string');
    })
    it('o retorno será positivo na forma de string', () => {
      expect(resposta).equals('neutro');
    })
  })
})


