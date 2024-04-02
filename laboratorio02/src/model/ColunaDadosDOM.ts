class ColunaDadosDOM {

    public colunaNome: HTMLDivElement;
    public colunaAlt: HTMLDivElement;
    public colunaPeso: HTMLDivElement;

    constructor(
        private idColNome: string,
        private idColAlt: string,
        private idColPeso: string,
    ){
        this.colunaNome = document.getElementById(idColNome) as HTMLDivElement;
        this.colunaAlt = document.getElementById(idColAlt) as HTMLDivElement;
        this.colunaPeso = document.getElementById(idColPeso) as HTMLDivElement;
    }

}