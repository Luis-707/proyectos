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
    let palabra1 = "Lacteo";
    let palabra2 = "coleta";

    console.log("Palabras ingresadas:", palabra1, "y", palabra2);
    console.log("¿Son anagramas?", anagram(palabra1, palabra2));
}

function anagram(wordOne, wordTwo) {
    if (wordOne.toLowerCase() === wordTwo.toLowerCase()) {
        return false;
    }
    return wordOne.toLowerCase().split("").sort().join("") === wordTwo.toLowerCase().split("").sort().join("");
}

anagrama(); // Llamada de prueba

