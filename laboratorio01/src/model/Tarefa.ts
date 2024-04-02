class Tarefa {

    static taskCount: number = -1;

    private limite!: Date;
    private id: Number;
    private dateCreation: Date;

    constructor(
        private name: string,
        private limiteString?: string,
        private descricao?: string,
    ) {
        this.id = ++Tarefa.taskCount;
        this.name = name;
        this.dateCreation = new Date()
        if (limiteString)
            this.setLimite(limiteString); 
        if (descricao)
            this.descricao = descricao;
    }

    public getName() {
        return this.name;
    }
    public getLimite() {
        return this.limite;
    }
    public getDesc() {
        return this.descricao;
    }
    public getId() {
        return this.id;
    }
    public setName(name: string) :void {
        this.name = name
    }
    public setDesc(desc: string) :void {
        this.descricao = desc
    }
    public setLimite(dataLimite: string): void {
        const date: Date = new Date(dataLimite);
        this.limite = date;
    }

    public edit([name, limite, desc]){
        if (name) this.setName(name);
        if (limite) this.setLimite(limite);
        if (desc) this.setDesc(desc);
    }
}