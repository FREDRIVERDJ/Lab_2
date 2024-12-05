// Paso 1. Declaración de Variables
let num1 = 10; 
let num2 = 5;  
let operacion = ""; 


function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: División por cero no permitida";
        }
    } else {
        return "Error: Operación no válida";
    }
}

// Paso 4. Bucle para realizar múltiples operaciones
let continuar = true;

while (continuar) {
    operacion = prompt("Ingrese la operación que desea realizar (suma, resta, multiplicacion, division) o 'salir' para terminar:");
    if (operacion === "salir") {
        console.log("¡Gracias por usar la calculadora! Hasta luego.");
        continuar = false;
        break;
    }

    num1 = parseFloat(prompt("Ingrese el primer número:"));
    num2 = parseFloat(prompt("Ingrese el segundo número:"));

    let resultado = realizarOperacion(num1, num2, operacion);
    console.log(`El resultado de la ${operacion} es: ${resultado}`);
}


