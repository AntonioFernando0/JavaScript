var idade = 22
console.log (`Você tem ${idade} anos`)
if (idade < 16) {
    console.log('Não vota')
}  else if (idade < 18 || idade > 65) {
    console.log ('Voto opcional')
} else {
    console.log('Voto obrigatório')
}

//Exemplos de Condições aninhadas//

var numero = 10;

if (typeof numero === 'number') {
    if (numero % 2 === 0) {
        console.log('O número é par.');
    } else {
        console.log('O número é ímpar.');
    }
} else {
    console.log('Por favor, forneça um número válido.');
}

var numero = -5;

if (typeof numero === 'number') {
    if (numero > 0) {
        console.log('O número é positivo.');
    } else if (numero < 0) {
        console.log('O número é negativo.');
    } else {
        console.log('O número é zero.');
    }
} else {
    console.log('Por favor, forneça um número válido.');
}

var idade = 20;
var possuiCarteira = true;

if (idade >= 18) {
    if (possuiCarteira) {
        console.log('Você pode dirigir.');
    } else {
        console.log('Você precisa ter uma carteira de motorista.');
    }
} else {
    console.log('Você é muito jovem para dirigir.');
}

var numero = 25;

if (numero >= 0 && numero <= 50) {
    console.log("O número está entre 0 e 50.");
} else if (numero > 50 && numero <= 100) {
    console.log("O número está entre 51 e 100.");
} else {
    console.log("O número está fora dos intervalos especificados.");
}