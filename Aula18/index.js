const mensage = "Criança esperança"
const paragrafo = "Quanto deseja doar ?"
const valores = [10, 20, 100, 200];
const lista = document.getElementById('lista')



valores.forEach(v => {
  const item = document.createElement('li');
  item.innerText = v.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  lista.appendChild(item);
});



document.getElementById('titulo').innerText = mensage;
document.getElementById('paragrafo').innerText = paragrafo;

function verificar(){
    let valor = parseInt(document.getElementById('valor').value);

    switch(valor){
        case 10,
             20,
             100,
             200
        :
         alert(`Você doou ${valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)

         break;

         default:
            alert("Opção invalidada!")
    }
}