/* function Area(a,p){

    

    return ((a * p) / 2);

    
    

  
}

let nro = 4;

let nro2 = 80;


console.log("resultado de forma", Area(nro,nro2));

*/

//otro

function Area(a, p, tipo) {
    const tiposPoligonos = {
        "triángulo": "Triángulo",
        "rombo": "Rombo",
        "trapecio": "Trapecio"
    };

    let nombrePoligono = tiposPoligonos[tipo] || "Polígono desconocido";
    
    return `El área del ${nombrePoligono} es ${(a * p) / 2}`;
}

let nro = 4;
let nro2 = 80;

console.log(Area(nro, nro2, "triángulo")); // El área del Triángulo es 160
console.log(Area(nro, nro2, "rombo")); // El área del Rombo es 160
console.log(Area(nro, nro2, "cuadrado")); // El área del Polígono desconocido es 160
