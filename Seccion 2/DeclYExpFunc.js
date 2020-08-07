// Declaraciones y expresiones de funciones

//En el video anterior se declararon las funciones con la declaracion function. Pero no es la unica forma.
//Y es usando expresiones de funciones.

//Function declaration
//function aQueTeDedicas (job, firstName){}
//Esta es ladiferencia entre las dos, pero la manera en la que pasamos los parametros y lo que hay en el bloque es exactamente lo mismo

//Function expression
var aQueTeDedicas = function(job, firstName){
    switch (job){ //La vez anterior que hicimos esta funcion mostrabamos por consola la respuesta y un break, en este caso retornaremos algo.
        case 'teacher':
            return firstName + ' enseña a los chicos como codear.'; //aca no se necesita el break porque una vez que retorna la info la funcion inmediatamente termina.
        case 'driver':
            return firstName + ' conduce un uber en Bs As.';
        case 'disigner':
            return firstName + ' se dedica a diseñar paginas web.';
        default:
            return firstName + ' hace alguna otra cosa.'
    }
}
//Entonces en este caso, tenemos una variable y le asignamos a esa variable esa funcion y el bloque de esa funcion

//Tal y como haciamos antes, llamamos a la funcion. Hay que recordar que esta funcion retorna algo y por ende, hay que guardarlo en algun lado.
//En este caso lo mostraremos por consola.
console.log(aQueTeDedicas('teacher', 'john'));


/* Veamos la diferencias entre declaraciones y expresiones:
 Javascript expressions son pedazos de codigo que SIEMPRE producen un valor.
 No importa que largas sean siempre retornaran un valor que será una expresion.

 Nosotros podemos escribir nuestra funcion tal cual en la consola y nos retorna un resultado:
 aQueTeDedicas('teacher', 'john');

 Entonces, cualquier cosa que hagamos que produzca un resultado es una function expression.
 
 En cuanto a los statements o declaraciones, no producen ningun valor inmediato.
 ejemplo escribiendo lo siguiente en la consola.
    if (true) { console.log(23) }
    retorna 23 y undefined entonces no devuelve realmente nada. si bien retorna el 23, corresponde a lo qeu esta dentro de los corchetes,
    pero el statement en si no retorna nada.
 */