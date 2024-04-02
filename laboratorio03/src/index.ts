const carrinho: Carrinho = new Carrinho();
const itensDom: ListaItensDOM = new ListaItensDOM();
const table: HTMLTableSectionElement = document.getElementById('conteudo') as HTMLTableSectionElement;
const quantidade: HTMLSpanElement = document.getElementById('quantidade') as HTMLSpanElement;
const total: HTMLSpanElement = document.getElementById('total') as HTMLSpanElement;

document.getElementById('add-cel')?.addEventListener('click', addCel);
document.getElementById('add-bic')?.addEventListener('click', addBic);
document.getElementById('add-tv')?.addEventListener('click', addTv);

function generateHTML(): void {
    itensDom.createElements(carrinho);
    table.innerHTML = itensDom.liElements.join('');
    itensDom.resetElements();

    document.querySelectorAll('button').forEach((el) => {
        el.addEventListener('click', itensDom.removeElem);
    });
    quantidade.textContent = carrinho.getQtdDeItens().toString();
    total.textContent = carrinho.valorTotal().toString();
}

function addCel(): void {
    const modelo: string = (document.getElementById('modelo-cel') as HTMLInputElement).value;
    const fabricante: string = (document.getElementById('cel-fab') as HTMLInputElement).value;
    const valor: number = parseFloat((document.getElementById('val-cel') as HTMLInputElement).value);
    const memoria: string = (document.getElementById('memoria') as HTMLInputElement).value;

    carrinho.addItem(new Celular(modelo, fabricante, valor, memoria));
    resetCampos(
        document.getElementById('modelo-cel') as HTMLInputElement,
        document.getElementById('cel-fab') as HTMLInputElement,
        document.getElementById('val-cel') as HTMLInputElement,
        document.getElementById('memoria') as HTMLInputElement,
    );
    generateHTML();
}
function addBic(): void {
    resetCampos();
    const modelo: string = (document.getElementById('modelo-bic') as HTMLInputElement).value;
    const fabricante: string = (document.getElementById('bic-fab') as HTMLInputElement).value;
    const valor: number = parseFloat((document.getElementById('bic-val') as HTMLInputElement).value);
    const aro: number = parseInt((document.getElementById('aro') as HTMLInputElement).value);

    carrinho.addItem(new Bicicleta(modelo, fabricante, valor, aro));
    resetCampos(
        document.getElementById('modelo-bic') as HTMLInputElement,
        document.getElementById('bic-fab') as HTMLInputElement,
        document.getElementById('bic-val') as HTMLInputElement,
        document.getElementById('aro') as HTMLInputElement,
    );
    generateHTML();
}
function addTv(): void {
    const modelo: string = (document.getElementById('modelo-tv') as HTMLInputElement).value;
    const fabricante: string = (document.getElementById('tv-fab') as HTMLInputElement).value;
    const valor: number = parseFloat((document.getElementById('tv-val') as HTMLInputElement).value);
    const polegadas: number = parseInt((document.getElementById('polegadas') as HTMLInputElement).value);
    const resolucao: string = (document.getElementById('resolucao') as HTMLInputElement).value;

    carrinho.addItem(new TV(modelo, fabricante, valor, resolucao, polegadas));
    resetCampos(
        document.getElementById('modelo-tv') as HTMLInputElement,
        document.getElementById('tv-fab') as HTMLInputElement,
        document.getElementById('tv-val') as HTMLInputElement,
        document.getElementById('polegadas') as HTMLInputElement,
        document.getElementById('resolucao') as HTMLInputElement,
    );
    generateHTML();
}
function resetCampos(...inputs: HTMLInputElement[]): void {
    inputs.forEach((el) => (el.value = ''));
}
