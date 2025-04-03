// Función para calcular el área de un triángulo usando la fórmula del determinante
function area(x1, y1, x2, y2, x3, y3) {
    return Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2.0);
}

// Función para contar los puntos enteros dentro del triángulo
function puntosEnTriangulo(x1, y1, x2, y2, x3, y3) {
    // Determinar los límites del triángulo
    let minX = Math.min(x1, x2, x3);
    let maxX = Math.max(x1, x2, x3);
    let minY = Math.min(y1, y2, y3);
    let maxY = Math.max(y1, y2, y3);

    // Área del triángulo original
    let areaOriginal = area(x1, y1, x2, y2, x3, y3);
    let contador = 0;

    // Recorrer todos los puntos enteros dentro del límite
    for (let px = minX; px <= maxX; px++) {
        for (let py = minY; py <= maxY; py++) {
            // Calcular las áreas con el punto (px, py)
            let a1 = area(px, py, x2, y2, x3, y3);
            let a2 = area(x1, y1, px, py, x3, y3);
            let a3 = area(x1, y1, x2, y2, px, py);

            // Si la suma de áreas es menor o igual al área original, el punto está dentro
            if (a1 + a2 + a3 <= areaOriginal) {
                contador++;
            }
        }
    }

    return contador;
}

// Ejemplo de uso
console.log(puntosEnTriangulo(8, 3, 5, 2, 3, 9)); // Triángulo con vértices (1,1), (5,1), (3,4)
