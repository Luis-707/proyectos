function moverElemento(event) {
    let contenedor = document.getElementById("contenedor");
    let posicionActual = contenedor.getBoundingClientRect();
    let paso = 10; // Cantidad de píxeles que se moverá
    
    switch(event.key) {
        case "ArrowUp":
            contenedor.style.top = (posicionActual.top - paso) + "px";
            break;
        case "ArrowDown":
            contenedor.style.top = (posicionActual.top + paso) + "px";
            break;
        case "ArrowLeft":
            contenedor.style.left = (posicionActual.left - paso) + "px";
            break;
        case "ArrowRight":
            contenedor.style.left = (posicionActual.left + paso) + "px";
            break;
    }

    function animar() {
        contenedor.style.top = nuevaPosicion.top + "px";
        contenedor.style.left = nuevaPosicion.left + "px";
    }

    requestAnimationFrame(animar);
}

// Agregamos el evento para escuchar cuando se presionan las teclas
document.addEventListener("keydown", moverElemento);