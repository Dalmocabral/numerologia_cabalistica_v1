// src/components/CalculoDiasFavoraveis.js

/**
 * Calcula os dias favoráveis do mês com base no Dia de Nascimento.
 * Regra: Reduz o dia de nascimento a um dígito (X).
 * Dias favoráveis são todos os dias do mês (1-31) cuja redução também resulta em X.
 * Ex: Nasceu dia 6. Dias favoráveis: 6, 15 (1+5=6), 24 (2+4=6).
 */
export const calcularDiasFavoraveis = (dataNascimento) => {
    if (!dataNascimento) return "";

    // Extrai o dia
    const partes = dataNascimento.split('-');
    const diaNasc = parseInt(partes[2], 10);

    if (isNaN(diaNasc)) return "";

    // Reduz o dia de nascimento a um único dígito (Base)
    const reduzir = (n) => {
        while (n > 9 && n !== 11 && n !== 22) { // Mantém mestres se quiser, mas para dias favoráveis costuma-se reduzir tudo a 1-9
             n = n.toString().split('').reduce((a, b) => a + parseInt(b), 0);
        }
        // Para dias favoráveis simples, reduzimos até 1-9
        if (n > 9) n = n.toString().split('').reduce((a, b) => a + parseInt(b), 0);
        return n;
    };

    const base = reduzir(diaNasc);
    const diasFavoraveis = [];

    // Varre de 1 a 31 para encontrar os compatíveis
    for (let i = 1; i <= 31; i++) {
        if (reduzir(i) === base) {
            diasFavoraveis.push(i);
        }
    }

    return diasFavoraveis.join(", ");
};