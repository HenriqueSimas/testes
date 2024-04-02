let addButton = document.getElementById("btn-add");
addButton.addEventListener("click", createAndAddTask);
const lista = new TodoList();
function createAndAddTask() {
    const inputs = getFieldsValue();
    let tarefaTexto = document.createElement("p");
    let afazeres = document.getElementById("list");
    lista.addTask(new Tarefa(inputs.inputTitle, inputs.inputDateL, inputs.inputDateL));
    let deleteTaskButton = document.createElement("button");
    setDeleteButton(deleteTaskButton);
    let novoItem = document.createElement("li");
    novoItem.setAttribute("class", "d-flex list-group-item justify-content-around align-items-center");
    novoItem.setAttribute("id", `li-${Tarefa.taskCount}`);
    console.log(Tarefa.taskCount);
    tarefaTexto.textContent = `${lista.getATaskById(Tarefa.taskCount)}`;
    novoItem.appendChild(tarefaTexto);
    novoItem.appendChild(deleteTaskButton);
    afazeres.appendChild(novoItem);
    resetStates(document.getElementById("titulo"), document.getElementById("date"), document.getElementById("desc"));
}
function getFieldsValue() {
    return new Campos(document.getElementById("titulo").value, document.getElementById("date").value, document.getElementById("desc").value);
}
function setDeleteButton(deleteButton) {
    deleteButton.addEventListener("click", removeTaskById);
    deleteButton.setAttribute("class", "btn btn-primary m-3");
    deleteButton.setAttribute("id", `${Tarefa.taskCount}`);
    deleteButton.textContent = "Remove Task";
}
function removeHtmlElement(id) {
    const removeElem = document.getElementById(`li-${id}`);
    console.log(id);
    const list = document.querySelector("#list");
    console.log(removeElem, list);
    list.removeChild(removeElem);
}
function resetStates(titulo, data, descricao) {
    titulo.value = "";
    data.value = "";
    descricao.value = "";
}
function removeTaskById(e) {
    const srcButton = e.srcElement;
    const idAttribute = srcButton.getAttribute("id");
    const id = Number.parseInt(idAttribute);
    console.log(idAttribute);
    lista.removeTask(id);
    removeHtmlElement(id);
}
