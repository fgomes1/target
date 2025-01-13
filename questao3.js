const fs = require('fs');

// Carregar dados de faturamento a partir de um arquivo JSON
const faturamentoMensal = JSON.parse(fs.readFileSync('faturamento.json', 'utf8'));

function calcularFaturamento(faturamentoMensal) {
    let menorFaturamento = Infinity;
    let maiorFaturamento = -Infinity;
    let somaFaturamento = 0;
    let diasComFaturamento = 0;

    faturamentoMensal.forEach(dia => {
        if (dia.faturamento > 0) {
            if (dia.faturamento < menorFaturamento) {
                menorFaturamento = dia.faturamento;
            }
            if (dia.faturamento > maiorFaturamento) {
                maiorFaturamento = dia.faturamento;
            }
            somaFaturamento += dia.faturamento;
            diasComFaturamento++;
        }
    });

    const mediaMensal = somaFaturamento / diasComFaturamento;
    const diasAcimaDaMedia = faturamentoMensal.filter(dia => dia.faturamento > mediaMensal).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

const resultado = calcularFaturamento(faturamentoMensal);

console.log(`Menor faturamento: ${resultado.menorFaturamento}`);
console.log(`Maior faturamento: ${resultado.maiorFaturamento}`);
console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);