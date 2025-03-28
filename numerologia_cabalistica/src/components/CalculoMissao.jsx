//src/components/Calculo/missao.jsx

import { calcularExpressao } from './CalculoExpressao';
import { calcularDestino } from './CalculoDestino'; // Criamos essa função baseada na data de nascimento

export const calcularMissao = (nome, dataNascimento) => {
    if (!nome || !dataNascimento) return '';

    // Calcula os números de Destino e Expressão
    const numeroDestino = calcularDestino(dataNascimento);
    const numeroExpressao = calcularExpressao(nome);

    // Soma os dois valores
    let somaTotal = numeroDestino + numeroExpressao;

    // Reduz a soma final, mas preservando 11 e 22
    while (somaTotal >= 10 && somaTotal !== 11 && somaTotal !== 22) {
        somaTotal = somaTotal.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }

    return somaTotal;
};
