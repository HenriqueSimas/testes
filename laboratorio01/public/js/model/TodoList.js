class TodoList {
    constructor() {
        this.taskList = [];
    }
    getTaskList() {
        return this.taskList;
    }
    getATaskNameById(id) {
        const nomeTask = this.taskList.filter(el => id === el.getId())[0].getName();
        return nomeTask;
    }
    getATaskDescById(id) {
        const descTask = this.taskList.filter(el => id === el.getId())[0].getDesc();
        return descTask;
    }
    getATaskDateLimitById(id) {
        const limitTask = this.taskList.filter(el => id === el.getId())[0].getLimite().toDateString();
        return limitTask;
    }
    addTask(task) {
        this.taskList.push(task);
    }
    removeTask(id) {
        this.taskList = this.taskList.filter(el => el.getId() != id);
    }
    editTask(id, campos) {
        this.taskList.forEach(el => {
            if (el.getId() === id) {
                el.edit(campos);
            }
        });
    }
}
