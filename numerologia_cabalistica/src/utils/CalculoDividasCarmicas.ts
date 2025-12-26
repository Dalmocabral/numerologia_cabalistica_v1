export const calcularDividasCarmicas = (dataNascimento, expressao, destino, motivacao) => {
    const dividas = new Set(); // Usamos um Set para evitar duplicações

    // Verifica se a data de nascimento corresponde a uma dívida cármica
    if (dataNascimento) {
        const diaNascimento = parseInt(dataNascimento.split('-')[2], 10);
        if ([13, 14, 16, 19].includes(diaNascimento)) {
            dividas.add(diaNascimento);
        }
    }

    // Verifica as dívidas cármicas nos números principais
    const mapDividas = {
        4: 13, // Expressão/Destino/Motivação 4 → Dívida Cármica 13
        5: 14, // Expressão/Destino/Motivação 5 → Dívida Cármica 14
        7: 16, // Expressão/Destino/Motivação 7 → Dívida Cármica 16
        1: 19, // Expressão/Destino/Motivação 1 → Dívida Cármica 19
    };

    [expressao, destino, motivacao].forEach((numero) => {
        if (mapDividas[numero]) {
            dividas.add(mapDividas[numero]);
        }
    });

    return Array.from(dividas).sort((a, b) => a - b).join(', ') || 'Nenhuma';
};
