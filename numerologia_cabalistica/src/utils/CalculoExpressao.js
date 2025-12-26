//scr/components/CalculoExpressao.jsx

import { tabelaNumeros, tabelaAcentos } from './TabelaNumerologia';

// Normaliza corretamente (padroniza apóstrofo curvo)
const normalizarNome = (nome) => {
    return nome
        .normalize('NFC')
        .replace(/’/g, "'")
        .toUpperCase();
};

// Função para calcular o valor da letra considerando acentos e apóstrofo
export const calcularValorComAcento = (letra) => {
    if (!letra.trim()) return 0;

    // Se for apóstrofo diretamente
    if (letra === "'") {
        return tabelaAcentos["'"] || 0;
    }

    const acentos = letra.normalize('NFD').match(/[\u0300-\u036f]/g);
    const letraBase = letra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    let valorBase = tabelaNumeros[letraBase] || 0;

    if (acentos) {
        acentos.forEach(acento => {
            if (tabelaAcentos[acento]) {
                valorBase += tabelaAcentos[acento];
            }
        });
    }

    return valorBase;
};

// EXPRESSÃO = soma total das letras + reduzir
export const calcularExpressao = (nome) => {
    if (!nome) return '';

    const nomeNormalizado = normalizarNome(nome);

    const letrasValidas = nomeNormalizado.split('').filter(c =>
        /[A-ZÇÁÉÍÓÚÀÈÌÒÙÂÊÎÔÛÃÕÄËÏÖÜ']/.test(c)
    );

    const somaTotal = letrasValidas.reduce((acc, letra) =>
        acc + calcularValorComAcento(letra), 0
    );

    const reduzir = (n) => {
        while (n >= 10 && n !== 11 && n !== 22) {
            n = n.toString().split('').reduce((s, d) => s + Number(d), 0);
        }
        return n;
    };

    return reduzir(somaTotal);
};
