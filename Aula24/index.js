function contarVogais(palavra) {
    let vogais = ["a", "e", "i", "o", "u"];
    let contador = 0;

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i].toLowerCase())) {
            contador++;
        }
    }

    return contador;
}

console.log(contarVogais("Junior")); // 3




async function buscarMensagem(){

    let dados = "Olá, mundo!"
    const mensagem = new Promise((buscarMsg) =>{
        setTimeout(() => {
            console.log("Olá, mundo!")
            buscarMsg(dados)
        }, 2000);
    }  )
    await mensagem
    console.log("Mensagem Buscadas")
}

buscarMensagem()