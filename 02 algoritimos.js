let listaCompras = [];

function adicionarItens(itens) {

    itens.forEach(item => listaCompras.push(item));

    let ultimoItem = listaCompras[listaCompras.length - 1].toLowerCase();
    if (ultimoItem !== "leite") {
        listaCompras.push("leite");
    }

    console.log("Lista de Compras:", listaCompras);
}

adicionarItens(["pão", "ovo", "suco"]);
