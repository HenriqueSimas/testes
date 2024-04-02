const edFis = new Turma('Educacao Fisica', []);
const colunaDados = new ColunaDadosDOM('col-nome', 'col-alt', 'col-peso');
const mediaDados = new TurmaDadosDOM(
    edFis,
    document.getElementById('qtd-alunos') as HTMLParagraphElement,
    document.getElementById('media-alt') as HTMLSpanElement,
    document.getElementById('media-peso') as HTMLSpanElement,
);
(document.getElementById('btn-add') as HTMLButtonElement).addEventListener('click', addAluno);

function render() {
    removeAllChildNodes(colunaDados.colunaNome);
    removeAllChildNodes(colunaDados.colunaAlt);
    removeAllChildNodes(colunaDados.colunaPeso);
    edFis.listaAlunos.forEach((aluno) => {
        const alu = new CampoAlunoDOM(aluno);
        colunaDados.colunaNome.appendChild(alu.getElementoNome());
        colunaDados.colunaAlt.appendChild(alu.getElementoAltura());
        colunaDados.colunaPeso.appendChild(alu.getElementoPeso());
    });
    mediaDados.atualizarValores();
}

function removeAllChildNodes(parent: HTMLDivElement) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addAluno(): void {
    const nome = (document.getElementById('nome') as HTMLInputElement).value;
    const idade = parseInt((document.getElementById('idade') as HTMLInputElement).value);
    const altura = parseInt((document.getElementById('altura') as HTMLInputElement).value);
    const peso = parseFloat((document.getElementById('peso') as HTMLInputElement).value);

    if (nome && idade && altura && peso) {
        edFis.addAluno(new Aluno(nome, idade, altura, peso));
        resetCampos(
            document.getElementById('nome') as HTMLInputElement,
            document.getElementById('idade') as HTMLInputElement,
            document.getElementById('altura') as HTMLInputElement,
            document.getElementById('peso') as HTMLInputElement,
        );
        render();
    }
}

function resetCampos(...inputs: HTMLInputElement[]): void {
    inputs.forEach((el) => (el.value = ''));
}
