export const calcularAnoPessoal = (dataNascimento) => {
    if (!dataNascimento) return '';

    // Pegar o dia e o mês da data de nascimento
    const [anoNascimento, mesNascimento, diaNascimento] = dataNascimento.split('-').map(Number);
    
    // Obter a data atual
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();

    // Definir o ano vigente
    const jaFezAniversario = 
        hoje.getMonth() + 1 > mesNascimento || 
        (hoje.getMonth() + 1 === mesNascimento && hoje.getDate() >= diaNascimento);

    const anoVigente = jaFezAniversario ? anoAtual : anoAtual - 1;

    // Somar os dígitos do dia, mês e ano vigente
    const soma = [...`${diaNascimento}${mesNascimento}${anoVigente}`]
        .map(Number)
        .reduce((acc, num) => acc + num, 0);

    // Reduzir até um único dígito (exceto para 11 e 22, que são reduzidos diretamente)
    const reduzirNumero = (numero) => {
        while (numero >= 10) {
            numero = numero.toString().split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0);
        }
        return numero;
    };

    return reduzirNumero(soma);
};
