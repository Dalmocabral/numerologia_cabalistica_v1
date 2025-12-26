export const calcularMomentosDecisivos = (dataNascimento, destino) => {
    if (!dataNascimento) return null;
  
    const [ano, mes, dia] = dataNascimento.split('-').map(Number);
  
    // 1º Momento Decisivo
    const primeiroMomento = reduzirNumero(dia + mes);
    const fimPrimeiroMomento = 37 - destino;
    const anoFimPrimeiroMomento = ano + fimPrimeiroMomento;
  
    // 2º Momento Decisivo
    const segundoMomento = reduzirNumero(dia + somarDigitos(ano));
    const fimSegundoMomento = anoFimPrimeiroMomento + 9;
  
    // 3º Momento Decisivo
    const terceiroMomento = reduzirNumero(primeiroMomento + segundoMomento);
    const fimTerceiroMomento = fimSegundoMomento + 9;
  
    // 4º Momento Decisivo
    const quartoMomento = reduzirNumero(mes + somarDigitos(ano));
    
    return [
      { momento: primeiroMomento, inicio: ano, fim: anoFimPrimeiroMomento },
      { momento: segundoMomento, inicio: anoFimPrimeiroMomento, fim: fimSegundoMomento },
      { momento: terceiroMomento, inicio: fimSegundoMomento, fim: fimTerceiroMomento },
      { momento: quartoMomento, inicio: fimTerceiroMomento, fim: '...' },
    ];
  };
  
  // Função para somar os dígitos de um número
  const somarDigitos = (num) => num.toString().split('').reduce((acc, d) => acc + Number(d), 0);
  
  // Função para reduzir um número até um único dígito (exceto 11 e 22)
  const reduzirNumero = (num) => {
    while (num > 9 && num !== 11 && num !== 22) {
      num = somarDigitos(num);
    }
    return num;
  };
  