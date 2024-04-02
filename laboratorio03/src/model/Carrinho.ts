class Carrinho {
    itens: Produto[];

    constructor() {
        this.itens = [];
    }

    public addItem(produto: Produto): boolean {
        this.itens.push(produto);
        return true;
    }

    public valorTotal(): number {
        let total: number = 0;
        this.itens.forEach((el) => {
            total += el.valor;
        });
        return total;
    }

    public getQtdDeItens(): number {
        return this.itens.length;
    }

    public removerProduto(id: string) {
        this.itens = this.itens.filter((prod) => prod.idElem !== id);
    }
}
