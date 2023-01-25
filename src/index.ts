import { ItemPedido, Pedido } from "./corrigindo_erros_atividade_5";
import { Livro, PedidoLocador } from "./LocarLivro";

let pedidoFeito = new Pedido();
const pedido = new ItemPedido(20, "torrada", 4);
pedidoFeito.add(pedido);
console.log(pedido);

let pedidoLocarLivro = new PedidoLocador("Cassiano");
let livroLocado = new Livro("A volta dos que não foram!", 5);
pedidoLocarLivro.add(livroLocado);
console.log(pedidoLocarLivro);
let novoLivroLocado = new Livro("Clean Code", 365);
pedidoLocarLivro.add(novoLivroLocado);

console.log("Livros locados:");
pedidoLocarLivro.verLivros();
