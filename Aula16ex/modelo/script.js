let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n) {
    if(Number(n) >= 1 && Number(n)<=100) {
        return true
    }else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ''; // Limpa o resultado
    } else {
        window.alert('Valor inválido ou já encontrado na lista');
    }
    num.value = ''; // Limpa o campo de entrada
    num.focus(); // Coloca o foco no campo de entrada
}

function finalizar() {
    // Verifica se a lista 'valores' está vazia
    if (valores.length == 0) {
        // Se a lista estiver vazia, exibe um alerta informando o usuário
        window.alert('Adicione valores antes de finalizar');
    } else {
        // Se a lista não estiver vazia, prossegue com a análise dos valores

        // Armazena o total de elementos na lista 'valores'
        let tot = valores.length;

        // Inicializa as variáveis 'maior' e 'menor' com o primeiro valor da lista
        let maior = valores[0];
        let menor = valores[0];

        // Inicializa a variável 'soma' com 0
        let soma = 0;

        // Loop através de todos os valores na lista 'valores'
        for (let pos in valores) {
            // Adiciona o valor atual à soma total
            soma += valores[pos];

            // Se o valor atual for maior que 'maior', atualiza 'maior'
            if (valores[pos] > maior) {
                maior = valores[pos];
            }

            // Se o valor atual for menor que 'menor', atualiza 'menor'
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }

        // Calcula a média dos valores
        let media = soma / tot;

        // Exibe os resultados
        res.innerHTML = ''; // Limpa o conteúdo da div de resultado
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}.</p>`;
    }
}