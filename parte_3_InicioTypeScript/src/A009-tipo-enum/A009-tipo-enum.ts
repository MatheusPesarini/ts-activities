enum Cores {
    VERMELHO = 10,
    AZUL,
    AMARELO,
}

enum Cores {
    ROXO = 'ROXO',
    VERDE = 201,
    ROSA,
}

function escolhaACor(cor: Cores): void {
    console.log(Cores[cor]);
}

escolhaACor(Cores.AMARELO);