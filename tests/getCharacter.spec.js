/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

/*
Essa função recebe como parâmetro o nome de um personagem e retorna um objeto com seu nome, classe e frases.

O retorno será de acordo com a seguinte relação:

 Parâmetro  |      Nome       |    Classe   |              Frases
----------------------------------------------------------------------------------
   Arya     |   Arya Stark    |    Rogue    | 'Not today', 'A girl has no name.'
  Brienne   |  Brienne Tarth  |    Knight   | 'Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'
Melissandre |   Melissandre   | Necromancer | 'Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'

- Se o parâmetro não estiver na tabela, a função retorna undefined.
- Se o parâmetro estiver, a função retorna um objeto no formato abaixo:

{
  name: 'Nome do Personagem',
  class: 'Classe do Personagem' ,
  phrases: ['frase1', 'frase2']
}

- OBS.: O parâmetro não é CASE SENSITIVE, portanto Arya, ArYa e ARYA tem o mesmo resultado.

Elabore testes para verificar se a função está funcionando de acordo com o proposto.

Parâmetros:
  - Uma string.

Comportamento: 
  - getCharacter('Arya');

Retorno:
{
  name: 'Arya Stark',
  class: 'Rogue',
  phrases: [ 'Not today', 'A girl has no name.' ]
}
*/

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  //it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
  //});
  //fail('Teste vazio!');
  // ESCREVA SEUS TESTES ABAIXO:
  it('Teste se a função, quando não recebe nenhum parâmetro, retorna undefined', () => {
    expect(getCharacter()).toBeUndefined();
  });
  /** Source: https://jestjs.io/pt-BR/docs/expect#toequalvalue
  (.toEqual(value) para comparar recursivamente todas as propriedades de instâncias de objeto, também conhecido como igualdade "profunda")
  */
  it('Teste se a função retorna o objeto correto para o parâmetro "Arya"', () => {
    const characterArya = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.'],
    };

    expect(getCharacter('Arya')).toEqual(characterArya);
  });

  it('Teste se a função retorna o objeto correto para o parâmetro "Brienne"', () => {
    const characterBrienne = {
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: ['Im No Lady, Your Grace.', 'I, Brienne Of Tarth, Sentence You To Die.'],
    };

    expect(getCharacter('Brienne')).toEqual(characterBrienne);
  });

  it('Teste se a função retorna o objeto correto para o parâmetro "Melissandre"', () => {
    const characterMelissandre = {
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: ['Death By Fire Is The Purest Death.', 'For The Night Is Dark And Full Of Terrors.'],
    };

    expect(getCharacter('Melissandre')).toEqual(characterMelissandre);
  });

  it('Teste se os parâmetros não são Case Sensitive', () => {
    const characterArya = {
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.'],
    };

    expect(getCharacter('ARYA')).toEqual(characterArya);
  });

  it('Teste se ao passar um nome que não está na tabela, a função retorna undefined', () => {
    expect(getCharacter('rosie')).toBeUndefined();
  });
});
