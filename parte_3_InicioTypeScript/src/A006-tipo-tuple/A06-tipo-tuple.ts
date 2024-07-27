const dadosCliente1: [number, string] = [1, 'Luiz'];
const dadosCliente2: readonly [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

dadosCliente1[0] = 100;

console.log(dadosCliente1);
console.log(dadosCliente2);

// arrays
const array1: readonly string[] = ['Luiz', 'Otávio'];
const array2: ReadonlyArray<string> = ['Luiz', 'Otávio'];