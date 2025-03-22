// src/components/CalculoDestino.jsx

export const calcularDestino = (dataNascimento) => {
    if (!dataNascimento) return '';
  
    // Converte a data para o formato correto (YYYY-MM-DD ou DD/MM/YYYY)
    const numeros = dataNascimento.replace(/\D/g, ''); // Remove caracteres não numéricos
  
    // Soma todos os dígitos da data de nascimento
    const somaTotal = numeros.split('').reduce((total, num) => total + parseInt(num, 10), 0);
  
    // Função para reduzir o número, mantendo 11 e 22
    const reduzirNumero = (numero) => {
      if (numero === 11 || numero === 22) {
        return numero; // Mantém números mestres
      }
      while (numero >= 10) {
        numero = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
        if (numero === 11 || numero === 22) return numero; // Verifica novamente após redução
      }
      return numero;
    };
  
    return reduzirNumero(somaTotal);
  };
  