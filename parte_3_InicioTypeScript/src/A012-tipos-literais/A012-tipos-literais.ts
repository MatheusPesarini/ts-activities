import * as constants from "node:constants";

let x = 100;
x = 900;
const y = 10;
let x2: 10 = 10;
//x2 = 12; Error

const pessoa = {
    nome: 'Luiz' as const,
    sobrenome: 'Miranda',
};

//pessoa.nome = 'João'; Error

function escolhaCor (cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
    return cor;
}

console.log(escolhaCor('Vermelho'));

export default 1;