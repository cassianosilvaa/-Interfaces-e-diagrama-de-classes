interface Desconto {
    aplicarDescontoEmPorcentagem(desconto: number): void;
    recuperarValorTotal(): number;
}

interface ValorPedido {
    aplicarDescontoEmReais(desconto: number): void;
}

export class Pedido implements ValorPedido {
    itens: ItemPedido[] = [];
    valor: number;

    add(item: ItemPedido): void {
        this.itens.push(item);
    }

    recuperarValorTotal(): number {
        let total = this.itens
            .map((i) => i.recuperarValorTotal())
            .reduce((sum, v) => sum + v, 0);

        return total;
    }

    aplicarDescontoEmReais(desconto: number): void {
        this.valor -= desconto;
    }

    aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
    }
}

export class ItemPedido implements ValorPedido, Desconto {
    valor: number;
    nome: string;
    quantidade: number;

    constructor(valor: number, nome: string, quantidade: number) {
        this.valor = valor;
        this.nome = nome;
        this.quantidade = quantidade;
    }

    aplicarDescontoEmPorcentagem(desconto: number): void {
        const porcentagem = desconto / 100;
        const descontoEmReais = this.valor * porcentagem;
        this.valor -= descontoEmReais;
    }

    recuperarValorTotal(): number {
        return this.valor * this.quantidade;
    }
    aplicarDescontoEmReais(desconto: number): void {
        this.valor -= desconto;
    }
}
