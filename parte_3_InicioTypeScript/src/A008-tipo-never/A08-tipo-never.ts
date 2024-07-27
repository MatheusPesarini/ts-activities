function criaErro (): never { // Função que nunca retorna nada
    throw new Error('Erro qualquer');
}

criaErro(); // Erro qualquer