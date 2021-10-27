// Exercício 4 - Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
// Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
// Após concluir a escrita do arquivo ela deverá retornar um ok .
// Descreva todos os cenários de teste utilizando describes ;
// Descreva todos os testes que serão feitos utilizando its ;
// Crie as asserções validando se o retorno da função possui o valor e tipo esperado.

const { expect } = require('chai')
const sinon = require('sinon');
const fs = require('fs');

const writeContent = require('../exercicio4');

describe('Executa a função writeContent', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync').returns('ok');
  });
  after(() => {
    fs.writeFileSync.restore();
  });

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
})
