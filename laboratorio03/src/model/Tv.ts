class TV implements Produto {
    modelo: string;
    fabricante: string;
    valor: number;
    resolucao: string;
    tamEmPol: number;
    idElem: string;

    constructor(
        modelo: string,
        fabricante: string,
        valor: number,
        resolucao: string,
        tamEmPol: number,
    ) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.resolucao = resolucao;
        this.tamEmPol = tamEmPol;
        this.idElem = modelo.replace(' ','') + fabricante;
    }

    makeItselfHtml(): string {
        return `<td>${this.modelo}, ${this.tamEmPol} - ${this.fabricante} - ${this.resolucao}</td><td>${this.valor} R$</td>`;
    }
}
