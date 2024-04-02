class Aluno {

    static idGenerator: number = 0;
    private id:string;

    constructor(
        
        private nomeCompleto: string,
        private idade: number,
        private altura: number,
        private peso: number
    ){
        this.id = Aluno.idGenerator.toString();
        this.nomeCompleto = nomeCompleto;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;

        Aluno.idGenerator ++;
    }

    public getNomeCompleto(): string {
        return this.nomeCompleto;
    }

    public getIdade(): number {
        return this.idade;
    }

    public getAltura(): number {
        return this.altura;
    }

    public getPeso(): number {
        return this.peso;
    }
}