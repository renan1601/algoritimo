let numeros = [5, 8, 12, 3, 7, 12, 15, 2, 9, 12];

let numeroParaVerificar = 12; 
let indicesEncontrados = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroParaVerificar) {
        indicesEncontrados.push(i);
    }
}

if (indicesEncontrados.length > 0) {
    console.log(`O número ${numeroParaVerificar} foi encontrado nos índices: ${indicesEncontrados.join(', ')}`);
} else {
    console.log(`O número ${numeroParaVerificar} não foi encontrado no vetor.`);
}
