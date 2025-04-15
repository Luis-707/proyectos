//push agrega un ultimo elemento al arreglo

let aviones = ["F16","Mig 35","Gripen NG"];

aviones.push("F15");

console.log(aviones);

//pop quita el ultimo elemento agregado al array

aviones.pop();

console.log(aviones);

//shift quita el primer elemento del array

aviones.shift();

console.log(aviones);

//unshift agrega un elemento al comienzo del array

aviones.unshift("B2 Spirit");

console.log(aviones);

//filter es para filtrar y obtener datos segun una condicion especifica

let avionconS = aviones.filter(aviones => aviones.includes("S"));

console.log(avionconS);

//concat como su nombre lo indica,sirve para concatenar dos arrays

let aviones_caza = ["F35", "Su57", "F22"];
let aviones_bombarderos = ["B52", "B21", "B1"];

let aviones_general = aviones_caza.concat(aviones_bombarderos);

console.log(aviones_general);




