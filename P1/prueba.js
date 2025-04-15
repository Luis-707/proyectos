let numeros = [];

function guardarNumeros() {
    const inputs = document.querySelectorAll('.numero');
    numeros = Array.from(inputs)
        .map(input => parseFloat(input.value))
        .filter(numero => !isNaN(numero));

    mostrarNumeros();
}

function mostrarNumeros() {
    let lista = document.getElementById("listaNumeros");
    lista.innerHTML = "";

    numeros.forEach((num, index) => {
        let elemento = document.createElement("li");
        elemento.textContent = `Índice ${index}: ${num}`;

        let botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.onclick = () => editarNumero(index);

        elemento.appendChild(botonEditar);
        lista.appendChild(elemento);
    });
}

function editarNumero(index) {
    if (index < 0 || index >= numeros.length) {
        alert("Índice fuera de rango.");
        return;
    }

    let nuevoValor = document.getElementById(`edit-${index}`).value;

    if (!isNaN(parseFloat(nuevoValor))) {
        numeros[index] = parseFloat(nuevoValor);
        mostrarNumeros();
    } else {
        alert("Por favor, introduce un número válido.");
    }
}
