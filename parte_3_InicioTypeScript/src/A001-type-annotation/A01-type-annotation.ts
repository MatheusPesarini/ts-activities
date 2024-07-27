// tipos
let nome: string = "zeca";
let idade: number = 30; // number, float, hex, binary
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeLetras: Array<string> = ['a', 'b', 'c'];
let arrayDeLetras2: string[] = ['a', 'b', 'c'];

// Objetos
let pessoa: { nome: string,  idade: number, adulto?: boolean } = {
    nome: "joao",
    idade: 30,
};

// Funções
function soma (x: number, y: number): number{
    return x + y;
}
const soma2: (x: number, y: number) => number = (x, y) => x + y;