// Implemente a função descrita no exercício 4.
// Crie a função descrita no exercício 4 utilizando o módulo fs do node.
// Adapte os testes adicionando stub ao módulo utilizado do fs , isolando assim o teste.
// Garanta que todos os testes escritos no exercício 4 irão passar com sucesso.
const fs = require('fs');

const writeContent = (fileName, fileContent) => {
  fs.writeFileSync(`./${fileName}`, fileContent)

  return 'ok';
}

module.exports = writeContent;