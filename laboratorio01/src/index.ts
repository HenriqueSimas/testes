const addButton: HTMLButtonElement = document.getElementById(
    "btn-add"
) as HTMLButtonElement;


addButton.addEventListener("click", createAndAddTask);

const afazeres: HTMLUListElement = document.getElementById("list") as HTMLUListElement;

const lista: TodoList = new TodoList();

function createAndAddTask(): void {
    const inputs: Campos = getFieldsValue();
    
    if(!inputs.inputTitle){
        return
    }
    
    lista.addTask(new Tarefa(inputs.inputTitle, inputs.inputDateL, inputs.inputDesc));
    
    const deleteTaskButton: HTMLButtonElement = setDeleteButton();
    const editTaskButton: HTMLButtonElement = setEditButton();
    const textParagraph: HTMLParagraphElement = setTextP();
    
    let descricao: HTMLParagraphElement | null
    let dataLimite: HTMLParagraphElement | null
    if (inputs.inputDesc){
        descricao = setDesc();
    } else {
        descricao = null
    }
    if (inputs.inputDateL){
        dataLimite = setLimite();
    } else {
        dataLimite = null
    }
    
    const listElement = createLiElemet(deleteTaskButton, editTaskButton, textParagraph, descricao, dataLimite);
    
    afazeres.appendChild(listElement);
    
    resetStates();
}

function changeHTML(listElement: HTMLLIElement):void {


}

function editTaskById(e): void{
    const inputs: Campos = getFieldsValue();

    const srcButton: HTMLButtonElement = e.srcElement;
    const idAttribute: string = srcButton.getAttribute("id");
    const id: number = Number.parseInt(idAttribute);

    let campos: [string, string, string] = [inputs.inputTitle, inputs.inputDateL, inputs.inputDesc];

    lista.editTask(id, campos);
    const editElem = document.getElementById(`li-${id}`);
    

    resetStates();
}

function getFieldsValue(): Campos {
    return new Campos(
        (document.getElementById("titulo") as HTMLInputElement).value,
        (document.getElementById("date") as HTMLInputElement).value,
        (document.getElementById("desc") as HTMLInputElement).value
    );
}

function setDeleteButton(): HTMLButtonElement {
    let deleteButton: HTMLButtonElement = document.createElement("button");
    deleteButton.addEventListener("click", removeTaskById);
    deleteButton.setAttribute("class", "btn btn-primary m-3");
    deleteButton.setAttribute("id", `${Tarefa.taskCount}`);
    deleteButton.textContent = "Remove Task";

    return deleteButton
}

function setEditButton(): HTMLButtonElement {
    let editButton: HTMLButtonElement = document.createElement("button");
    editButton.addEventListener("click", editTaskById);
    editButton.setAttribute("class", "btn btn-primary m-3");
    editButton.setAttribute("id", `${Tarefa.taskCount}`);
    editButton.textContent = "Edit Task";

    return editButton
}

function createLiElemet(buttonD: HTMLButtonElement, buttonE: HTMLButtonElement, text: HTMLParagraphElement, desc?: HTMLParagraphElement, dataL?:HTMLParagraphElement): HTMLLIElement{
    const novoItem = document.createElement("li");

    novoItem.setAttribute(
        "class",
        "d-flex list-group-item justify-content-between align-items-center"
    );
    novoItem.setAttribute("id", `li-${Tarefa.taskCount}`);
    novoItem.appendChild(text);
    if(desc) {
        novoItem.appendChild(desc)
    }
    if(dataL) {
        novoItem.appendChild(dataL)
    }
    const buttonsDiv = document.createElement("div");
    buttonsDiv.appendChild(buttonE);
    buttonsDiv.appendChild(buttonD);
    novoItem.appendChild(buttonsDiv);
    return novoItem;
}

function setTextP(): HTMLParagraphElement{
    const tarefaTexto: HTMLParagraphElement = document.createElement("p");
    tarefaTexto.textContent = `${lista.getATaskNameById(Tarefa.taskCount)}`;
    tarefaTexto.setAttribute("class", "m-0")
    return tarefaTexto;
}

function removeHtmlElement(id: number){
    const removeElem = document.getElementById(`li-${id}`);
    const list = document.querySelector("#list");
    list.removeChild(removeElem);
}

function setDesc():HTMLParagraphElement{
    const descTexto: HTMLParagraphElement = document.createElement("p");
    descTexto.textContent = `${lista.getATaskDescById(Tarefa.taskCount)}`;
    descTexto.setAttribute("class", "m-0")
    return descTexto;
}

function setLimite():HTMLParagraphElement{
    const limiteTexto: HTMLParagraphElement = document.createElement("p");
    limiteTexto.textContent = `${lista.getATaskDateLimitById(Tarefa.taskCount)}`;
    limiteTexto.setAttribute("class", "m-0")
    return limiteTexto;
}

function resetStates(): void {
    (document.getElementById("titulo") as HTMLInputElement).value = '',
    (document.getElementById("date") as HTMLInputElement). value = '',
    (document.getElementById("desc") as HTMLInputElement). value = ''
}

function removeTaskById(e: any): void {
    const srcButton: HTMLButtonElement = e.srcElement;
    const idAttribute: string = srcButton.getAttribute("id");
    const id: number = Number.parseInt(idAttribute);
    lista.removeTask(id);
    removeHtmlElement(id);
}