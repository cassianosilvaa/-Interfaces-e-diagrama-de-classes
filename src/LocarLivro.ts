interface LocacaoLivro {
    periodoEmDias: number;
    nomeLivro: string;
    verNomeLivro(): void;
    verPeriodoLocado(): void;
}
interface Locador {
    nome: string;
    livro: Livro[];
    verLivros(): void;
}

export class PedidoLocador implements Locador {
    public livro: Livro[];
    constructor(public nome: string) {
        this.livro = [];
    }
    add(livro: Livro): void {
        this.livro.push(livro);
    }
    verLivros(): void {
        console.log(this.livro);
    }
}

export class Livro implements LocacaoLivro {
    constructor(public nomeLivro: string, public periodoEmDias: number) {}

    verNomeLivro(): void {
        console.log(this.nomeLivro);
    }
    verPeriodoLocado(): void {
        console.log(this.periodoEmDias);
    }
}
