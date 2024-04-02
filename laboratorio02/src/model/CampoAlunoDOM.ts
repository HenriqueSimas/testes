class CampoAlunoDOM {
    
    private elementoNome: HTMLSpanElement = document.createElement("span");
    private elementoAltura: HTMLSpanElement = document.createElement("span");
    private elementoPeso: HTMLSpanElement = document.createElement("span");

    constructor(aluno: Aluno){
        this.elementoNome.textContent = aluno.getNomeCompleto();
        this.elementoAltura.textContent = aluno.getAltura().toString() + 'cm';
        this.elementoPeso.textContent = aluno.getPeso().toString() + 'kg';
    }

    public getElementoNome(): HTMLSpanElement {
        return this.elementoNome
    }
    public getElementoAltura(): HTMLSpanElement {
        return this.elementoAltura
    }
    public getElementoPeso(): HTMLSpanElement {
        return this.elementoPeso
    }

}