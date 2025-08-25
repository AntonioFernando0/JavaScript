// DESAFIOS GERADOS PELA IA GEMINI

for(let i = 1; i < 11; i++){
    console.log(i)
    if(i % 2 == 0){
        console.log(`Número par`)
    }else{
         console.log(`Número impar`)
    }

}

let tab = 1
for(let i = 1; i < 11; i++){
   let mult = tab * i
   console.log(`${tab} x ${i} = ${mult}`)
}

    
for(let i = 10; i > 0; i--){
    if(i === 1){
         console.log("Lançamento")
      
    }else{
    console.log(i)
   }
}


let somapares = 0;

for (let i = 1; i <= 10; i++) {
    console.log(i); // mostra todos os números de 1 a 10
    
    if (i % 2 === 0) {
        somapares += i; // acumula os pares
    }
}

console.log("Soma dos pares:", somapares);


let num1 = 0
let num2 = 1
let num3 = num1 + num2
console.log(num1); // primeiro número
console.log(num2); // segundo número
for(let i = 2; i < 10; i++){
    
    num3 = num1 + num2;
    console.log(num3)

    num1 = num2
    num2 = num3
}



function contarRegressivamente(numAle){
    for(let i = numAle; i > 0; i--){
        console.log(i)
    }
}

contarRegressivamente(9)

function fatorialIterativo(numero){
let fatorial = 1

for(let i = 1; i <= numero; i++){
    fatorial *= i; 
   
}
return fatorial
}

console.log(fatorialIterativo(5))



function tabuada(numero){
    let tab = numero
    for(let i = 1; i < 11; i++){
    let mult = tab * i
   console.log(`${tab} x ${i} = ${mult}`)
  }
 }
console.log(tabuada(5))



function somapares(inicio, fim) {
    let soma = 0;

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) { // verifica se é par
            soma += i;     // acumula na soma
        }
    }

    return soma; // retorna o resultado
}

console.log(somapares(5, 10)); // 30




let somapares = 0;

for (let i = 1; i <= 10; i++) {
    console.log(i); // mostra todos os números de 1 a 10
    
    if (i % 2 === 0) {
        somapares += i; // acumula os pares
    }
}

console.log("Soma dos pares:", somapares);