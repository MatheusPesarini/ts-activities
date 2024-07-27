type temNome = { nome: string };
type temSobrenome = { sobrenome: string };
type temIdade = { idade: number };
type Pessoa = temNome & temSobrenome & temIdade;

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type Intersecao = AB & AC;

const pessoa: Pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
};

console.log(pessoa);

export { pessoa };