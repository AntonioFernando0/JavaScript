const textoInput = document.getElementById('texto');
const itemList = document.getElementById('itemList');
let selectedItem = null;

// Cadastrar
function cadastrar() {
  const itemValue = textoInput.value.trim();

  if (itemValue !== "") {
    const li = document.createElement('li');
    li.textContent = itemValue;

    li.onclick = () => selecionarItem(li);

    itemList.appendChild(li);
    textoInput.value = "";
  } else {
    alert("Por favor, digite um texto para cadastrar.");
  }
}

// Selecionar
function selecionarItem(li) {
  if (selectedItem) {
    selectedItem.classList.remove("selected");
  }
  selectedItem = li;
  li.classList.add("selected");
}

// Editar
function editar() {
  if (!selectedItem) {
    alert("Selecione um item para editar.");
    return;
  }
  const novoTexto = prompt("Edite o item:", selectedItem.textContent);
  if (novoTexto && novoTexto.trim() !== "") {
    selectedItem.textContent = novoTexto.trim();
  }
}

// Deletar
function deletar() {
  if (!selectedItem) {
    alert("Selecione um item para deletar.");
    return;
  }
  selectedItem.remove();
  selectedItem = null;
}

// Visualizar
function visualizar() {
  if (!selectedItem) {
    alert("Selecione um item para visualizar.");
    return;
  }
  alert("Item: " + selectedItem.textContent);
}
