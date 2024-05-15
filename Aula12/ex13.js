var agora = new Date()
var diaSem = agora.getDay()

console.log(diaSem)

switch (diaSem) {
    case 0: 
    console.log('Domindo')
        
        break;
    case 1: 
    console.log('Segunda-feira')
            
    break;
    case 2: 
     console.log('Terça-feira')
            
    break;
    case 3: 
    console.log('Quarta-feira')
        
    break;
    case 4: 
    console.log('Quinta-feira')
        
    break;
    case 5: 
    console.log('Sexta-feira')
        
    break;
    case 5: 
    console.log('Sabádo')
        
    break;

    default:
        console.log('[Erro] Dia inválido')
        break;
}

var fruta = "banana";

switch (fruta) {
    case "maçã":
        console.log("A maçã é vermelha.");
        break;
    case "banana":
        console.log("A banana é amarela.");
        break;
    case "laranja":
        console.log("A laranja é laranja.");
        break;
    default:
        console.log("Não sei a cor dessa fruta.");
}