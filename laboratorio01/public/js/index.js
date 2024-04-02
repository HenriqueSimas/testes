const addButton = document.getElementById("btn-add");
addButton.addEventListener("click", createAndAddTask);
const afazeres = document.getElementById("list");
const lista = new TodoList();
function createAndAddTask() {
    const inputs = getFieldsValue();
    if (!inputs.inputTitle) {
        return;
    }
    lista.addTask(new Tarefa(inputs.inputTitle, inputs.inputDateL, inputs.inputDesc));
    const deleteTaskButton = setDeleteButton();
    const editTaskButton = setEditButton();
    const textParagraph = setTextP();
    let descricao;
    let dataLimite;
    if (inputs.inputDesc) {
        descricao = setDesc();
    }
    else {
        descricao = null;
    }
    if (inputs.inputDateL) {
        dataLimite = setLimite();
    }
    else {
        dataLimite = null;
    }
    const listElement = createLiElemet(deleteTaskButton, editTaskButton, textParagraph, descricao, dataLimite);
    afazeres.appendChild(listElement);
    resetStates();
}
function editTaskById(e) {
    const inputs = getFieldsValue();
    let descricao;
    let dataLimite;
    if (inputs.inputDesc) {
        descricao = setDesc();
    }
    else {
        descricao = null;
    }
    if (inputs.inputDateL) {
        dataLimite = setLimite();
    }
    else {
        dataLimite = null;
    }
    const srcButton = e.srcElement;
    const idAttribute = srcButton.getAttribute("id");
    const id = Number.parseInt(idAttribute);
    let campos = [inputs.inputTitle, inputs.inputDateL, inputs.inputDesc];
    lista.editTask(id, campos);
    resetStates();
}
function getFieldsValue() {
    return new Campos(document.getElementById("titulo").value, document.getElementById("date").value, document.getElementById("desc").value);
}
function setDeleteButton() {
    let deleteButton = document.createElement("button");
    deleteButton.addEventListener("click", removeTaskById);
    deleteButton.setAttribute("class", "btn btn-primary m-3");
    deleteButton.setAttribute("id", `${Tarefa.taskCount}`);
    deleteButton.textContent = "Remove Task";
    return deleteButton;
}
function setEditButton() {
    let editButton = document.createElement("button");
    editButton.addEventListener("click", editTaskById);
    editButton.setAttribute("class", "btn btn-primary m-3");
    editButton.setAttribute("id", `${Tarefa.taskCount}`);
    editButton.textContent = "Edit Task";
    return editButton;
}
function createLiElemet(buttonD, buttonE, text, desc, dataL) {
    const novoItem = document.createElement("li");
    novoItem.setAttribute("class", "d-flex list-group-item justify-content-between align-items-center");
    novoItem.setAttribute("id", `li-${Tarefa.taskCount}`);
    novoItem.appendChild(text);
    if (desc) {
        novoItem.appendChild(desc);
    }
    if (dataL) {
        novoItem.appendChild(dataL);
    }
    const buttonsDiv = document.createElement("div");
    buttonsDiv.appendChild(buttonE);
    buttonsDiv.appendChild(buttonD);
    novoItem.appendChild(buttonsDiv);
    return novoItem;
}
function setTextP() {
    const tarefaTexto = document.createElement("p");
    tarefaTexto.textContent = `${lista.getATaskNameById(Tarefa.taskCount)}`;
    tarefaTexto.setAttribute("class", "m-0");
    return tarefaTexto;
}
function removeHtmlElement(id) {
    const removeElem = document.getElementById(`li-${id}`);
    const list = document.querySelector("#list");
    list.removeChild(removeElem);
}
function setDesc() {
    const descTexto = document.createElement("p");
    descTexto.textContent = `${lista.getATaskDescById(Tarefa.taskCount)}`;
    descTexto.setAttribute("class", "m-0");
    return descTexto;
}
function setLimite() {
    const limiteTexto = document.createElement("p");
    limiteTexto.textContent = `${lista.getATaskDateLimitById(Tarefa.taskCount)}`;
    limiteTexto.setAttribute("class", "m-0");
    return limiteTexto;
}
function resetStates() {
    document.getElementById("titulo").value = '',
        document.getElementById("date").value = '',
        document.getElementById("desc").value = '';
}
function removeTaskById(e) {
    const srcButton = e.srcElement;
    const idAttribute = srcButton.getAttribute("id");
    const id = Number.parseInt(idAttribute);
    lista.removeTask(id);
    removeHtmlElement(id);
}
