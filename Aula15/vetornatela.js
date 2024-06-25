let valores = [8, 1, 7, 4, 2, 9]
valores.sort()
//console.log(valores) 1 exemplo


/*console.log(valores[0]) 2 exemplo
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
console.log(valores[0])
*/

/*for( let pos=0; pos < valores.length; pos++){
    
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) 3 exmplo
}
*/
for( let pos in valores){
    
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}