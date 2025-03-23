export const calcularCicloVida = (dataNascimento, destino) => {
    if (!dataNascimento || !destino) return null;
  
    const [ano, mes, dia] = dataNascimento.split('-').map(Number);
  
    // Primeiro ciclo
    const idadeFimCiclo1 = 37 - destino;
    const anoFimCiclo1 = ano + idadeFimCiclo1;
    const energiaCiclo1 = [...String(mes)].reduce((acc, num) => acc + Number(num), 0);
  
    // Segundo ciclo
    const idadeFimCiclo2 = idadeFimCiclo1 + 27;
    const anoFimCiclo2 = anoFimCiclo1 + 27;
    const energiaCiclo2 = [...String(dia)].reduce((acc, num) => acc + Number(num), 0);
  
    // Terceiro ciclo
    const energiaCiclo3 = [...String(ano)].reduce((acc, num) => acc + Number(num), 0);
    const energiaCiclo3Reduzida = [...String(energiaCiclo3)].reduce((acc, num) => acc + Number(num), 0);
  
    return [
      { ciclo: 'Primeiro', idade: `0 até ${idadeFimCiclo1} anos`, periodo: `${mes}/${ano} até ${mes}/${anoFimCiclo1}`, energia: energiaCiclo1 },
      { ciclo: 'Segundo', idade: `${idadeFimCiclo1} até ${idadeFimCiclo2} anos`, periodo: `${mes}/${anoFimCiclo1} até ${mes}/${anoFimCiclo2}`, energia: energiaCiclo2 },
      { ciclo: 'Terceiro', idade: `${idadeFimCiclo2} em diante`, periodo: `${mes}/${anoFimCiclo2} até ...`, energia: energiaCiclo3Reduzida }
    ];
  };
  