const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  //it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
  //});
  //fail('Teste vazio!');
  // ESCREVA SEUS TESTES ABAIXO:
  it('Teste se productDetails é uma função', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Teste se o retorno da função é um array', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
  });

  /** Source: https://jestjs.io/pt-BR/docs/expect 
  (.toHaveLength(number) verifica o tamanho de arrays ou strings) 
  */
  it('Teste se o array retornado pela função contém dois itens dentro', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toHaveLength(2);
  });

  it('Teste se os dois itens dentro do array retornado pela função são objetos', () => {
    const products = productDetails('Alcool gel', 'Máscara');

    expect(typeof products[0]).toBe('object');
    expect(typeof products[1]).toBe('object');
  });

  /**  Source: https://www.ti-enxame.com/pt/javascript/por-que-dois-objetos-identicos-nao-sao-iguais-entre-si/1067927459/
  (Objetos entre si não são iguais pois cada um é armazenado em um "espaço" diferente, sendo assim, é necessário acessar a chave do objeto para fazer essa comparação).
  */
  it('Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    const products = productDetails('Alcool gel', 'Máscara');

    expect(products[0].name).not.toBe(products[1].name);
  });

  /** Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith 
  (Este método permite que você verifique se uma string termina ou não com determinados caracteres, retorna true or false)
  */
  it('Teste se os dois productIds terminam com 123', () => {
    const products = productDetails('Alcool gel', 'Máscara');

    expect(products[0].details.productId.endsWith(123)).toBe(true);
    expect(products[1].details.productId.endsWith(123)).toBe(true);
  });
});
