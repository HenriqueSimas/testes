class TodoList {

    private taskList: Tarefa[] = [];

    constructor(){
    }

    public getTaskList() {
        return this.taskList;
    }

    public getATaskNameById (id: number): string {
        const nomeTask: string = this.taskList.filter(el => id === el.getId())[0].getName();
        return nomeTask;
    }

    public getATaskDescById (id: number): string {
        const descTask: string = this.taskList.filter(el => id === el.getId())[0].getDesc();
        return descTask;
    }
    public getATaskDateLimitById (id: number): string {
        const limitTask: string = this.taskList.filter(el => id === el.getId())[0].getLimite().toDateString();
        return limitTask;
    }

    public addTask (task: Tarefa) {
        this.taskList.push(task);
    }

    public removeTask (id: number) {
        this.taskList = this.taskList.filter( el => el.getId() != id)
    }

    public editTask (id: number, campos: [string, string, string]):void{
        this.taskList.forEach(el => {
            if (el.getId() === id){
                el.edit(campos);
            }
        })
    }

}