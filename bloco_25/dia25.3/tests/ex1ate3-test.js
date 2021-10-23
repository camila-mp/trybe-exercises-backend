const { assert, expect } = require('chai');
const defineNumber = require('../exercicio1');

describe('o parâmetro passado é menor que zero', () => {
  describe('o retorno', () => {
    const resposta = defineNumber(-1);

    it('o retorno é do tipo string', () => {
      expect(resposta).to.be.a('string');
    })
    it('o retorno é negativo na forma de string', () => {
      expect(resposta).equals('negativo');
    })
  })
})

describe('o parâmetro passado é maior que zero', () => {
  describe('o retorno', () => {
    const resposta = defineNumber(1);

    it('o retorno é do tipo string', () => {
      expect(resposta).to.be.a('string');
    })
    it('o retorno é positivo na forma de string', () => {
      expect(resposta).equals('positivo');
    })
  })
})

describe('o parâmetro passado é igual a zero', () => {
  describe('o retorno', () => {
    const resposta = defineNumber(0);

    it('o retorno é do tipo string', () => {
      expect(resposta).to.be.a('string');
    })
    it('o retorno é neutro na forma de string', () => {
      expect(resposta).equals('neutro');
    })
  })
});

describe('o parâmetro passado não é um número', () => {
  describe('o retorno', () => {
    const retorno = defineNumber('string')

    it('o retorno é do tipo string', () => {
    expect(retorno).to.be.a('string');
    })
    it('a string diz que o valor deve ser um número', () => {
      expect(retorno).equals('o valor deve ser um número');
    })
  });
});


