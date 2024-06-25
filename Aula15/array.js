let num = [ 5, 8, 4, 6 ]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}
    `)
let pos = num.indexOf(3)
if( pos == -1){
    console.log('O valor não foi encontrado!')
    } else {
        console.log(`O valor está na posição ${pos}`)
    }
 

/* num[3] = 6   
isso é para colocar mais um elemento no vetor ou então é mais fácil 
 num.push(7)
 num.length= quantidade de elementos 
 num.sort()= colocar todos elementos na forma crescente*/


    