let titulo = "Meu primeiro CRUD";
let par1 = "Agora irei criar um CRUD";

document.getElementById('par1').innerText = par1;
document.getElementById('titulo').innerText = titulo;

let lista = []; // aqui vamos armazenar os dados

function handleCreate() {
    const input = document.getElementById('inputText');
    const texto = input.value.trim();

    if (texto !== "") {
        lista.push(texto); // CREATE
        input.value = "";  // limpa campo
        renderList();      // atualiza tela
    }
}

function renderList() {
    const ul = document.getElementById('dataList');
    ul.innerHTML = ""; // limpa antes de desenhar

    lista.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = "list-group-item d-flex justify-content-between align-items-center";

        li.innerHTML = `
            <span>${item}</span>
            <div>
                <button class="btn btn-warning btn-sm me-2" onclick="handleUpdate(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="handleDelete(${index})">Excluir</button>
            </div>
        `;
        ul.appendChild(li);
    });
}

function handleDelete(index) {
    lista.splice(index, 1); // DELETE
    renderList();
}

function handleUpdate(index) {
    const novoTexto = prompt("Editar item:", lista[index]);
    if (novoTexto !== null && novoTexto.trim() !== "") {
        lista[index] = novoTexto.trim(); // UPDATE
        renderList();
    }
}

// Eventos

function setupEventListeners() {
    const createButton = document.getElementById('createButton');
    createButton.addEventListener('click', handleCreate);
}

// Inicializar a aplicação

function init() {
    setupEventListeners();
    renderList(); // READ inicial
}

window.onload = init;
