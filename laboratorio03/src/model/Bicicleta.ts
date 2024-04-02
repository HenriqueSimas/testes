class Bicicleta implements Produto {
    modelo: string;
    fabricante: string;
    valor: number;
    aro: number;
    idElem: string;

    constructor(modelo: string, fabricante: string, valor: number, aro: number) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this.aro = aro;
        this.idElem = modelo.replace(' ', '') + fabricante;
    }

    makeItselfHtml(): string {
        return `<td>${this.modelo} - ${this.fabricante}</td><td>${this.valor} R$</td>`;
    }
}
