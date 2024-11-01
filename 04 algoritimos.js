let tarefas = [];

function organizarTarefas(tarefasIniciais) {

    tarefas = [...tarefasIniciais];

    tarefas.splice(1, 1);

    tarefas.push("ligar para o médico");

    console.log("Lista de Tarefas Atualizada:", tarefas);
}

organizarTarefas(["comprar pão", "fazer exercícios", "estudar JavaScript"]);
