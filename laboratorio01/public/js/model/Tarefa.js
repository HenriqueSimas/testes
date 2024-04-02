class Tarefa {
    constructor(name, limiteString, descricao) {
        this.name = name;
        this.limiteString = limiteString;
        this.descricao = descricao;
        this.id = ++Tarefa.taskCount;
        this.name = name;
        this.dateCreation = new Date();
        if (limiteString)
            this.setLimite(limiteString);
        if (descricao)
            this.descricao = descricao;
    }
    getName() {
        return this.name;
    }
    getLimite() {
        return this.limite;
    }
    getDesc() {
        return this.descricao;
    }
    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    setDesc(desc) {
        this.descricao = desc;
    }
    setLimite(dataLimite) {
        const date = new Date(dataLimite);
        this.limite = date;
    }
    edit([name, limite, desc]) {
        if (name)
            this.setName(name);
        if (limite)
            this.setLimite(limite);
        if (desc)
            this.setDesc(desc);
    }
}
Tarefa.taskCount = -1;
