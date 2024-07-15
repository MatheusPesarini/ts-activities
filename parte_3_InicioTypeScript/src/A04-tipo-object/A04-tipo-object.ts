const objetoA: {
    chaveA: string;
    chaveB: string;
    chaceC?: string;
    [key: string]: unknown;
} = {
    chaveA: 'Valor A',
    chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro valor';
objetoA.chaveC = 'Novo valor';
objetoA.chaveD = 'Nova chave';