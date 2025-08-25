// Nesse código iremos utilizar os métodos map, filter e reduce.

// Array de números para demonstrar o uso do map
const numbers = [1, 2, 3, 4, 5];

// O método map cria um novo array onde cada elemento é o elemento original multiplicado por 2
const numbersMultipliedByTwo = numbers.map(function (item) {
    return item * 2;
});

// Array de idades para demonstrar o uso do filter
const age = [8, 10, 18, 20, 40];

// O método filter cria um novo array contendo apenas as idades pares
const evenAges = age.filter(function (ages) {
    return ages % 2 === 0; // Retorna apenas números divisíveis por 2
});

// Array de números para demonstrar o uso do reduce
const numeros = [2, 5, 8, 16, 20, 40];

// O método reduce percorre o array e acumula a soma de todos os elementos
// O segundo parâmetro "0" indica que o acumulador (primeiro parâmetro da função) começa em 0
const numerosReduzidos = numeros.reduce(function (numeros, somanum) {
    return somanum + numeros; 
}, 0);

// Exibe no console o novo array com os números multiplicados por 2
console.log(numbersMultipliedByTwo); // [2, 4, 6, 8, 10]

// Exibe no console apenas as idades pares
console.log(evenAges); // [8, 10, 18, 20, 40]

// Exibe no console a soma total dos elementos do array "numeros"
console.log(numerosReduzidos); // 91

