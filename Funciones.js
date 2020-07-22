//Funciones

function calcularEdad (añoNacimiento){
    var añoActual = new Date().getFullYear(); //Me permite obtener el año actual.
    return añoActual - añoNacimiento;
}

var edad = calcularEdad(1991);
console.log("La edad de Juan es: " + edad);

function añosAntesJubilacion(añoNacimiento, nombre){
    var edad = calcularEdad(añoNacimiento);
    var jubilacion = 65 - edad;
    //return jubilacion; funciones no tienen porque retornar algo
    //console.log(nombre + " se retira en " + jubilacion + " años.");
    if (jubilacion > 0){
        console.log(nombre + " se retira en " + jubilacion + " años.");
    } else {
        console.log(nombre + " ya está retirado.");
    }
}

añosAntesJubilacion(1998, 'Mario');