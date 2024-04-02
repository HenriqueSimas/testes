class Celular implements Produto {
    modelo: string;
    fabricante: string;
    valor: number;
    memoria: string;
    idElem: string;

    constructor(
        modelo: string,
        fabricante: string,
        valor: number,
        memoria: string,
    ) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.memoria = memoria;
        this.idElem = modelo.replace(' ','') + fabricante;
    }

    makeItselfHtml(): string {
        return `<td>${this.modelo} - ${this.fabricante} - ${this.memoria}</td><td>${this.valor} R$</td>`;
    }
}
