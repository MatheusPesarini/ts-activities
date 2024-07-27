let x: unknown; // unknown é um tipo mais restritivo que any, forçando a verificação de tipo

x = 100;
x = 'Luigi';
x = 900;
x = '100';
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
else console.log('x e de tipo desconhecido');