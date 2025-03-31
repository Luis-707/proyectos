/*Modo 1*/

/* function anagrama() {
    console.log(anagram("Lacteo", "coleta"));
}

function anagram(wordOne, wordTwo) {
    if (wordOne.toLowerCase() === wordTwo.toLowerCase()) {

        return false;

       
   
    }
    return wordOne.toLowerCase().split("").sort().join("") === wordTwo.toLowerCase().split("").sort().join("");
}

anagrama(); // Llamada de prueba */

/* Modo 2 */

function anagrama() {

    //Declaramos las variables dentro de la funcion
    let palabra1 = "Lacteo";
    let palabra2 = "coleta";

    //Se imprimen y visualizan las palabras que se compararan,ademas de decir si son o no anagramas
    console.log("Palabras ingresadas:", palabra1, "y", palabra2);
    console.log("¿Son anagramas?", anagram(palabra1, palabra2));
}

function anagram(wordOne, wordTwo) {
    if (wordOne.toLowerCase() === wordTwo.toLowerCase()) {
        return false;
    }

    //Primero pasamos las palabras a minusculas,
    // las convertimos en un array de caracteres 
    // para luego ordenarlas alfabeticamente y de ahi compararlas a ver si tienen o no parecido
    return wordOne.toLowerCase().split("").sort().join("") === wordTwo.toLowerCase().split("").sort().join("");
}

anagrama(); // Llamada de prueba

