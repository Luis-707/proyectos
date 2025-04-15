//Cambios entre 2 arreglos ya hechos

/* Cambio de todos*/ 

let valoresA = [8,12,19,200]

console.log(valoresA);


let valoresB = [3,11,17,23]

console.log(valoresB);

let cambiotodos = [valoresA, valoresB] = [valoresB, valoresA];


console.log(cambiotodos);

/* Cambio de algunos*/

const longitudMinima = Math.min(valoresA.length, valoresB.length);


for (let i = 0; i < 4; i++) {

    console.log(`Elemento ${i} de arreglo1: ${valoresA[i]}, y de arreglo2: ${valoresB[i]}`);
    
    
}

let indicesvalores_cambiados = [1,3]

indicesvalores_cambiados.forEach((i) =>{if (i < valoresA.length && i < valoresB.length) {
    [valoresA[i], valoresB[i]] = [valoresB[i], valoresA[i]];
  }
});

console.log(valoresA);

console.log(valoresB);


/* Cambiando algunos segun una condicion */



let centenas = [150, 105, 123, 140]

let Miles = [1000,2500, 6055, 4600]

for (let u = 0; u < centenas.length; u++) {
  if (centenas[u] > 110 && centenas[u] < 150) {

    [centenas[u], Miles[u]] = [Miles[u], centenas[u]];
    
  } 
    
}

console.log(centenas);

console.log(Miles);















