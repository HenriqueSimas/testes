class TurmaDadosDOM {
    constructor(
        public turma: Turma,
        public spanQuantidadeAlunos: HTMLParagraphElement,
        public spanMediaAlturas: HTMLSpanElement,
        public spanMediaPesos: HTMLSpanElement,
    ) {
        this.spanQuantidadeAlunos.textContent = turma.getNumAlunos().toString();
        this.spanMediaAlturas.textContent = turma.getMediaAlturas().toString() + ' cm';
        this.spanMediaPesos.textContent = turma.getMediaPesos().toString() + ' kg';
    }

    public atualizarValores(): void {
        this.spanQuantidadeAlunos.textContent = this.turma.getNumAlunos().toString();
        this.spanMediaAlturas.textContent = this.turma.getMediaAlturas().toString() + ' cm';
        this.spanMediaPesos.textContent = this.turma.getMediaPesos().toString() + ' kg';
    }
}
