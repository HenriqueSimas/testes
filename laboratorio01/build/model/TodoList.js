class TodoList {
    constructor() {
        this.taskList = [];
    }
    getTaskList() {
        return this.taskList;
    }
    getATaskById(id) {
        const nomeTask = this.taskList.filter(el => id === el.getId())[0].getName();
        return nomeTask;
    }
    addTask(task) {
        this.taskList.push(task);
    }
    removeTask(id) {
        this.taskList = this.taskList.filter(el => el.getId() != id);
    }
}
