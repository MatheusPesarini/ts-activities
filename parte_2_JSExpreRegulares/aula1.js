// g - global: procura por todas as ocorrências
// i - insensitive: ignora maiúsculas e minúsculas
// () - grupos
// | - ou


const { texto } = require('./base');

const regExp1 = /João/gi;
const found1 = regExp1.exec(texto);

console.log(texto)
console.log(texto.match(regExp1));

console.log(texto.replace(/João/gi, 'Felipe'));
console.log(texto.replace(/(João)/gi, '--$1--'));
console.log(texto.replace(/(João|cão)/gi, function (input){
    return input.toUpperCase();
}));


// * - 0 ou n (opcional)
// + - 1 ou n (obrigatório)
// ? - 0 ou 1 (opcional)

const regExp2 = /Jo+ão/gi;
console.log(texto.match(regExp2));

// / para caso seja usado caracteres especiais

const regExp3 = /\./g;
console.log(texto.match(regExp3));