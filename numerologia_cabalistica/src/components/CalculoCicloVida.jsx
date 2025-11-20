export const calcularCicloVida = (dataNascimento, destino) => {
  if (!dataNascimento || !destino) return null;

  const [ano, mes, dia] = dataNascimento.split('-').map(Number);

  // Reduz um número até 1 dígito, exceto 11 e 22
  const reduzir = (n) => {
    while (n > 9 && n !== 11 && n !== 22) {
      n = String(n)
        .split('')
        .reduce((acc, num) => acc + Number(num), 0);
    }
    return n;
  };

  // PRIMEIRO CICLO
  const idadeFimCiclo1 = 37 - destino;
  const anoFimCiclo1 = ano + idadeFimCiclo1;
  const energiaCiclo1 = reduzir(
    String(mes).split('').reduce((acc, n) => acc + Number(n), 0)
  );

  // SEGUNDO CICLO
  const idadeFimCiclo2 = idadeFimCiclo1 + 27;
  const anoFimCiclo2 = anoFimCiclo1 + 27;
  const energiaCiclo2 = reduzir(
    String(dia).split('').reduce((acc, n) => acc + Number(n), 0)
  );

  // TERCEIRO CICLO
  const somaAno = String(ano).split('').reduce((acc, n) => acc + Number(n), 0);
  const energiaCiclo3 = reduzir(somaAno);

  return [
    {
      ciclo: "Primeiro",
      idade: `0 até ${idadeFimCiclo1} anos`,
      periodo: `${mes}/${ano} até ${mes}/${anoFimCiclo1}`,
      energia: energiaCiclo1,
    },
    {
      ciclo: "Segundo",
      idade: `${idadeFimCiclo1} até ${idadeFimCiclo2} anos`,
      periodo: `${mes}/${anoFimCiclo1} até ${mes}/${anoFimCiclo2}`,
      energia: energiaCiclo2,
    },
    {
      ciclo: "Terceiro",
      idade: `${idadeFimCiclo2} em diante`,
      periodo: `${mes}/${anoFimCiclo2} até ...`,
      energia: energiaCiclo3,
    },
  ];
};
