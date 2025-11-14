//src/components/Calculo/missao.jsx

import { calcularValorComAcento } from "./CalculoExpressao";

const normalizar = (nome) => {
    return nome
        .normalize("NFC")
        .replace(/’/g, "'")
        .toUpperCase();
};

const reduzir = (n) => {
    while (n >= 10 && n !== 11 && n !== 22) {
        n = n.toString().split("").reduce((s, d) => s + Number(d), 0);
    }
    return n;
};

// MISSÃO = último sobrenome reduzido
export const calcularMissao = (nome) => {
    if (!nome) return "";

    const nomeNorm = normalizar(nome);

    // separa por espaços e apóstrofo
    const partes = nomeNorm.split(/[\s']/).filter(Boolean);

    const sobrenome = partes[partes.length - 1];

    const valores = sobrenome
        .split("")
        .map((letra) => calcularValorComAcento(letra));

    const soma = valores.reduce((a, b) => a + b, 0);

    return reduzir(soma);
};
