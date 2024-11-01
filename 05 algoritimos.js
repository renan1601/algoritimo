let filmesFavoritos = ["O Poderoso Chefão", "Pulp Fiction", "Inception"];

filmesFavoritos[0] = "Clube da Luta";

if (filmesFavoritos[filmesFavoritos.length - 1] !== "Harry Potter") {
    filmesFavoritos.push("Harry Potter");
}

console.log("Lista de Filmes Favoritos:", filmesFavoritos);
