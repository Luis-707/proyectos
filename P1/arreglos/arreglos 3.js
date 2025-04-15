//Reemplazar elementos de un arreglo

//Metodo 1

let tanques = ['T90','Leopard2','T26','M1A2','T64']

console.log(tanques)


/*tanques.splice(tanques.indexOf('T64'), 1, 'T80U');
console.log(tanques);*/

//Metodo 2

tanques.splice(-5,1,'AMX 30')

console.log(tanques)

console.log()
console.log()

//Metodo 3

let tanques_SGM = ['T34','Tiger','T35','M4A6','Crusaider']

console.log(tanques_SGM.length)



tanques_SGM.splice(tanques_SGM.indexOf('M4A6'), 2, 'Churchill', 'Panther')
console.log(tanques_SGM)


//Acceder a un arreglo

let TiposPlantas = ['Carnivoras', 'Tropicales', 'Deserticas', 'Articas' ];

let acceso_P = TiposPlantas.slice(1);

console.log(acceso_P);

//Uso de elemento de un arreglo

let uso_P = TiposPlantas[3];

let uso_P2 = TiposPlantas[0];

console.log(uso_P2,uso_P);

//condicionales con manejo de arreglos
if (uso_P == TiposPlantas[3]) {

TiposPlantas.push('Templadas')
console.log(TiposPlantas);

    
}

if (uso_P != TiposPlantas[3]) {

    TiposPlantas.unshift('Salvajes')
    console.log(TiposPlantas);

} 











