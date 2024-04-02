class ListaItensDOM {
    public liElements: string[];

    constructor() {
        this.liElements = [];
    }

    public createDeleteButton() {}

    public createElements(carrinho: Carrinho) {
        carrinho.itens.forEach((prod) => {
            let listElem = '<tr>';
            listElem += prod.makeItselfHtml();
            listElem += `<td><button id="${prod.idElem}" class="btn btn-danger">Remover</button></td>`;
            listElem += '<tr>';
            this.liElements.push(listElem);
        });
    }

    public resetElements() {
        this.liElements = [];
    }

    public removeElem(e: any) {
        const srcButton: HTMLButtonElement = e.srcElement;
        const idAttribute = srcButton.getAttribute('id') as string;
        carrinho.removerProduto(idAttribute);
        generateHTML();
        console.log('teste');
    }
}
