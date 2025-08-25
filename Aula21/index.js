let titulo = "Notas dos melhores alunos no curso de JavaScript"

document.getElementById('titulo').innerText = titulo;



function verificar(){

    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);
    let nota3 = parseFloat(document.getElementById('nota3').value);
    let total = (nota1 + nota2 + nota3);


    document.getElementById('total').innerText = `Total: ${total}`;

    
}