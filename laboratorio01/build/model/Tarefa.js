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
    getId() {
        return this.id;
    }
    setLimite(dataLimite) {
        const date = new Date(dataLimite);
        this.limite = date;
    }
}
Tarefa.taskCount = -1;
