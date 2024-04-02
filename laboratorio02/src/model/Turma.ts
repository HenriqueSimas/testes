class Turma {
    static idGenerator: number = 0;
    private id: string;

    constructor(
        private nome: string,
        public listaAlunos: Aluno[] = [],
    ) {
        this.id = Turma.idGenerator.toString();
        this.nome = nome;
        this.listaAlunos = listaAlunos;

        Turma.idGenerator++;
    }

    public getNumAlunos(): number {
        return this.listaAlunos?.length;
    }

    public getMediaIdades(): string {
        const somaIdades: number = this.listaAlunos.reduce((acumulador, curEl) => acumulador + curEl.getIdade(), 0);
        const media = somaIdades / this.getNumAlunos();
        if (Number.isNaN(media)) {
            return '0';
        }
        return media.toFixed(2);
    }

    public getMediaAlturas(): string {
        const somaAlturas: number = this.listaAlunos.reduce((acumulador, curEl) => acumulador + curEl.getAltura(), 0);
        const media = somaAlturas / this.getNumAlunos();
        if (Number.isNaN(media)) {
            return '0';
        }
        return media.toFixed(2);
    }

    public getMediaPesos():string {
        const somaPesos: number = this.listaAlunos.reduce((acumulador, curEl) => acumulador + curEl.getPeso(), 0);
        const media = somaPesos / this.getNumAlunos();
        if (Number.isNaN(media)) {
            return '0';
        }
        return media.toFixed(2);
    }

    public addAluno(aluno: Aluno): boolean {
        this.listaAlunos.push(aluno);
        return true;
    }
}
