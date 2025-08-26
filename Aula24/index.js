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
    try {
        const mensagem = new Promise((resolve, reject) => {
            setTimeout(() => {
                // simulando erro no servidor
                // reject(new Error("Servidor fora do ar")); 
                
                // simulando resposta com sucesso
                const data = { id: 1, name: 'John', email: 'joao@email.com' }
                resolve(data)
            }, 2000);  
        });

        const resultado = await mensagem;

        console.log("Usuário buscado com sucesso!");
        console.log(resultado);

        // exemplo de erro proposital
        let teste = resultado.resolve(); // isso vai dar erro pq objeto não tem resolve()

    } catch (error) {
        console.error('Erro capturado no try/catch: ', error.message);
    }
}

buscarUsuario();



async function buscarUsuario() {
    try {
        const mensagem = new Promise((resolve, reject) => {
            setTimeout(() => {
                // Cenário de ERRO:
                reject("Servidor fora do ar"); 
                
                // Cenário de SUCESSO: (comentado)
                // const data = { id: 1, name: 'John', email: 'joao@email.com' }
                // resolve(data)
            }, 2000); 
        });

        const resultado = await mensagem; // AQUI VAI DAR ERRO!

        console.log("Usuário buscado com sucesso!");
        console.log(resultado);

    } catch (error) {
        // O CATCH vai ser executado
        console.error('Erro capturado no try/catch: ', error);
    }
}

buscarUsuario();




async function buscarUsuario() {
    try {
       if(resolve == true ){ const mensagem = new Promise ((Math.random(resolve, reject)) => {
            setTimeout(() => {
                // Cenário de ERRO:
                reject("Servidor fora do ar"); 
                
                // Cenário de SUCESSO: (comentado)
                // const data = { id: 1, name: 'John', email: 'joao@email.com' }
                // resolve(data)
            }, 2000); 
        });

        const resultado = await mensagem; // AQUI VAI DAR ERRO!

        console.log("Usuário buscado com sucesso!");
        console.log(resultado);

   } }else{ catch (error) {
        // O CATCH vai ser executado
        console.error('Erro capturado no try/catch: ', error);
    }
}}

buscarUsuario();


async function buscarUsuario() {
    try {
        const mensagem = new Promise((resolve, reject) => {
            setTimeout(() => {
                const sucesso = Math.random() > 0.5; // 50% de chance
                if (sucesso) {
                    const data = { id: 1, name: 'John', email: 'joao@email.com' };
                    resolve(data);
                } else {
                    reject(new Error("Servidor fora do ar"));
                }
            }, 2000);
        });

        const resultado = await mensagem;

        console.log("Usuário buscado com sucesso!");
        console.log(resultado);

    } catch (error) {
        console.error('Erro capturado no try/catch: ', error.message);
    }
}

buscarUsuario();
