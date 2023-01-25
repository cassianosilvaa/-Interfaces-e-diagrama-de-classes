export class Item {
    public valor: number;
    public nome: string;
    public descricao: string;

    constructor(valor: number, nome: string, descricao: string) {
        this.valor = valor;
        this.nome = nome;
        this.descricao = descricao;
    }
}

export class Pedido01 {
    public itens: Array<Item>;
    public valorTotal: number;

    constructor() {
        this.itens = [];
        this.valorTotal = 0;
    }
}
