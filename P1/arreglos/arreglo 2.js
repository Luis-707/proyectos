//Agrega un elemento al arreglo

var aviones = ["F16","Mig 35","Gripen NG"];

var valor = 90;

if (valor <= 100) {

aviones.push("F15");

console.log(aviones);

//Ordenado por orden alfabetico
aviones.sort();

console.log(aviones);

//Invierte el orden de los elementos del arreglo
    
} else {

    aviones.reverse();

    console.log(aviones);

    
}

//Uso de filtros

var autos = ["Audi", "Mitsubishi", "Honda", "Susuki", "Toyota"];

console.log(autos);

var valor = 10;


if (valor <= 10) {


    
    autosconAyO = autos.filter(autos => autos.includes("a","o"));

console.log(autosconAyO);
    
} else {
    
    console.log(autos);

}


