function verificar() {
    // Obter valores dos inputs
    let inicio = document.getElementById('ini').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    let res = document.getElementById('res');
    
    // Convertendo valores para números
    inicio = Number(inicio);
    fim = Number(fim);
    passo = Number(passo);

    // Verificar se os valores são válidos
    if (isNaN(inicio) || isNaN(fim) || isNaN(passo) || passo <= 0) {
        res.innerHTML = 'Impossível contar'
        alert('Por favor, insira valores válidos.');
    } else { 
        res.innerHTML = 'Contando: ';
        if (inicio < fim) {
            // Contagem crescente 
            for (let i = inicio; i <= fim; i += passo) {
                res.innerHTML += `${i} \u{1F449}`;
            }
        } else {
            // Contagem decrescente
            for (let i = inicio; i >= fim; i -= passo) {
                res.innerHTML += `${i} \u{1F449}`;
            }
        }
        res.innerHTML += '\u{1F3C1}';  // Bandeira de chegada
    }
}