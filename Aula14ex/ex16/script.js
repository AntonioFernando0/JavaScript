function verificar() {
    // Obter valores dos inputs
    let inicio = document.getElementById('ini').value;
    let fim = document.getElementById('fim').value;
    let passo = document.getElementById('passo').value;
    
    // Convertendo valores para números
    inicio = Number(inicio);
    fim = Number(fim);
    passo = Number(passo);

    // Verificar se os valores são válidos
    if (inicio === '' || fim === '' || passo === '' || passo <= 0) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Inicializar a variável de resultado
    let resultado = '';

    // Gerar a sequência de números
    for (let i = inicio; i <= fim; i += passo) {
        resultado += i + ' ';
    }

    // Exibir o resultado
    document.querySelector('.res').innerText = resultado;
}