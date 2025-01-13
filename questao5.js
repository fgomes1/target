const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function inverterString(str) {
    let stringInvertida = '';
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

rl.question('Digite uma string para ser invertida: ', (texto) => {
    const textoInvertido = inverterString(texto);
    console.log(`String original: ${texto}`);
    console.log(`String invertida: ${textoInvertido}`);
    rl.close();
});
