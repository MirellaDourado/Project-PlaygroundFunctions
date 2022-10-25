// Desafio 11

function generatePhoneNumber(arrayNumeros) {
  let odeioEssaQuestao = null;
  let tamanho = arrayNumeros.length;

  if (tamanho !== 11) {
    odeioEssaQuestao = 'Array com tamanho incorreto.';
    return odeioEssaQuestao;
  }
  for (let index = 0; index < tamanho; index += 1) {
    let contando = 0;
    for (let indexSecundario = 0; indexSecundario < tamanho; indexSecundario += 1) {
      if (arrayNumeros[index] === arrayNumeros[indexSecundario]) {
        contando += 1;
        if (contando >= 3) {
          odeioEssaQuestao = 'não é possível gerar um número de telefone com esses valores';
          return odeioEssaQuestao;
        }
      }
    }
  }
  for (let indice = 0; indice < tamanho; indice += 1) {
    if (arrayNumeros[indice] > 9 || arrayNumeros[indice] < 0) {
      odeioEssaQuestao = 'não é possível gerar um número de telefone com esses valores';
      return odeioEssaQuestao;
    }
    odeioEssaQuestao = '(' + arrayNumeros[0] + arrayNumeros[1] + ')' + ' ' + arrayNumeros[2] + arrayNumeros[3] + arrayNumeros[4] + arrayNumeros[5] + arrayNumeros[6] + "-" + arrayNumeros[7] + arrayNumeros[8] + arrayNumeros[9] + arrayNumeros[10];
    return odeioEssaQuestao;
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let validacao = null;

  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    validacao = true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    validacao = true;
  } else if (lineC < (lineB + lineA) && lineC > Math.abs(lineA - lineB)) {
    validacao += true;
  } else {
    validacao = false;
  }
  return validacao;
}

// Desafio 13
function hydrate(stringWithNumbers) {
  let numbers = /\d+/g;
  let agua = 0;
  let arrayNumbers = stringWithNumbers.match(numbers);
  let result = null;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    agua += parseInt(arrayNumbers[index]);
  }
  if (agua === 1) {
    result = agua + ' copo de água';
  } else {
    result = agua + ' copos de água';
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
