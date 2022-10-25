// Desafio 1
function compareTrue(animal1, animal2) {
  if(animal1 === true && animal2 === true){
    return true;
  } else {
    return false;

  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2
  return result
}

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  let palavra = ''
  for(let index in string){
    if (string[index] != ' '){
      palavra += string[index]
    } else {
      arrayString.push(palavra)
      palavra = ''
    }
  }
  arrayString.push(palavra)
  return arrayString
}

console.log(splitSentence('go trybe'))

// Desafio 4
function concatName(arrayDeStrings) {
  ultimoIndex = arrayDeStrings.length - 1
  let ultimoPrimeiro = arrayDeStrings[ultimoIndex] + ',' + ' ' + arrayDeStrings[0]
  return ultimoPrimeiro
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let results = winPoints + ties;

  return results
}

// Desafio 6
function highestCount(arrayNumbers) {
  let contadora = 0;
  let maiorNumero = arrayNumbers[0];
  for(let index = 0; index < arrayNumbers.length; index += 1){
    if (maiorNumero < arrayNumbers[index]) {
      maiorNumero = arrayNumbers[index];
    }
  }

  for (let indice = 0; indice < arrayNumbers.length; indice += 1) {
    if(maiorNumero === arrayNumbers[indice]){
      contadora+=1;
    }
  }
  return contadora
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1;
  let distanciaGato2;
  let result;
  if (mouse > cat1){
    distanciaGato1 = mouse - cat1
  } else {
    distanciaGato1 = cat1 - mouse
  }

  if(mouse > cat2){
    distanciaGato2 = mouse - cat2
  } else {
    distanciaGato2 = cat2 - mouse
  }

  if(distanciaGato1 > distanciaGato2){
    result = 'cat2'
  } else if(distanciaGato1 < distanciaGato2){
    result = 'cat1'
  } else {
    return 'os gatos trombam e o rato foge'
  }
  return result
}

// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayString = []
  for(let index in arrayNumeros){
    if(arrayNumeros[index]%3===0 && arrayNumeros[index]%5===0){
      arrayString.push('fizzBuzz')
    } else if(arrayNumeros[index]%5===0){
      arrayString.push('buzz')
    } else if(arrayNumeros[index]%3===0){
      arrayString.push('fizz')
    } else {
      arrayString.push('bug!')
    }
  }
  return arrayString
}

// Desafio 9
function encode(string) {
  let result = ''
  for(let index in string){
    if(string[index] !== 'a' && string[index] !== 'e' && string[index] !== 'i' && string[index] !== 'o' && string[index] !== 'u'){
      result += string[index]
    } else if (string[index] === 'a'){
      result += 1
    } else if (string[index] === 'e'){
      result += 2
    } else if (string[index] === 'i'){
      result += 3
    } else if (string[index] === 'o'){
      result += 4
    } else {
      result += 5
    }
  }
  return result
}

function decode(stringNumber) {
  let result = ''
  for(let index in stringNumber){
    if(stringNumber[index] !== '1' && stringNumber[index] !== '2' && stringNumber[index] !== '3' && stringNumber[index] !== '4' && stringNumber[index] !== '5'){
      result += stringNumber[index]
    } else if (stringNumber[index] === '1'){
      result += 'a'
    } else if (stringNumber[index] === '2'){
      result += 'e'
    } else if (stringNumber[index] === '3'){
      result += 'i'
    } else if (stringNumber[index] === '4'){
      result += 'o'
    } else {
      result += 'u'
    }
  }
  return result
}

// Desafio 10
function techList(tecnology, name) {
  let array = [
    { tech: '', name: name },
    { tech: '', name: name },
    { tech: '', name: name },
    { tech: '', name: name },
    { tech: '', name: name }
  ]
  tecnology = tecnology.sort()


  if(tecnology.length === 0){
    return 'Vazio!'
  } else {
    for(let index = 0; index < tecnology.length; index+=1){
    array[index].tech = tecnology[index]
    }
    return array
  }
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};