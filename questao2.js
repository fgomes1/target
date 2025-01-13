const readline = require('readline');

function isFibonacci(num) {
    if (num < 0) return false;
    let a = 0;
    let b = 1;
    
    while (a <= num) {
        if (a === num) return true;
        let temp = a;
        a = b;
        b = temp + b;
    }
    
    return false;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
    const numero = parseInt(input);

    if (isFibonacci(numero)) {
        console.log(`${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${numero} não pertence à sequência de Fibonacci.`);
    }

    rl.close();
});