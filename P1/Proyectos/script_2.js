function anagrama() {
    console.log(anagram("Lacteo", "coleta"));
}

function anagram(wordOne, wordTwo) {
    if (wordOne.toLowerCase() === wordTwo.toLowerCase()) {

        return false;

       
   
    }
    return wordOne.toLowerCase().split("").sort().join("") === wordTwo.toLowerCase().split("").sort().join("");
}

anagrama(); // Llamada de prueba
