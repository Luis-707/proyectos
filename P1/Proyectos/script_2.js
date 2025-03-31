function anagrama() {
    console.log(anagram("Lacteo", "coleta"));
}

function anagram(wordOne, wordTwo) {
    if (wordOne.toLowerCase() === wordTwo.toLowerCase()) {
        return false;

        console.log("Palabra que no es anagrama: ", wordOne);
   
    }
    return wordOne.toLowerCase().split("").sort().join("") === wordTwo.toLowerCase().split("").sort().join("");
}

anagrama(); // Llamada de prueba
