const writeContent = require('../exercicio4');
const { expect } = require('chai')

describe('função recebe nome do arquivo e conteúdo', () => {
  describe('o retorno', () => {
    const retorno = writeContent('arquivo.txt', 'conteudo a ser escrito');
    it('deve ser uma string', () => {
      expect(retorno).to.be.a('string');
    })
    it('deve ser "ok"', () => {
      expect(retorno).equals('ok');
    })
  })
});
