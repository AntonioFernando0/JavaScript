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


async function buscarUsuario() {
    const mensagem = new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = {id: 1,  name: 'John', email: 'joao@email.com'}
                resolve(data)
            }, 2000);  
    });
    const resultado = await mensagem

    console.log("Usúario buscado com sucesso!")
    console.log(resultado);
    
}
buscarUsuario()