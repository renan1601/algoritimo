let tarefasLimpeza = [];

function organizarTarefasLimpeza(tarefasIniciais) {

    tarefasLimpeza = [...tarefasIniciais];

    tarefasLimpeza.splice(2, 1);

    tarefasLimpeza[1] = "limpar banheiro";

    console.log("Lista de Tarefas de Limpeza Atualizada:", tarefasLimpeza);
}

organizarTarefasLimpeza(["varrer sala", "passar pano", "limpar janelas", "lavar louça"]);
