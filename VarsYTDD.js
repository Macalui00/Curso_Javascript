// Variables y tipos de datos:
var firstName = 'John'; //se pueden usar tanto las comillas simples como comillas dobles.
console.log(firstName);

var lastName = 'Smith';
var age = 28;

/*En Javascript hay 5 tipos de datos diferentes:
1- Number: son siempre numeros de punto flotante (Float), SIEMPRE tienen decimales incluso si no los vemos.
2- String: secuencia de caracteres.
3- Boolean: tipo de dato logica que solo puede ser True o False.
4- Undefined: un tipo de dato de una variable que todavia no tiene un valor. El valor por default de una variable.
5- NULL: "No existe"
son tipos de datos primitivos que no son objetos.

Javascript tiene una caracteristica llamada tipeado dinamico: que hace que los tipos de datos son asignados automaticamente a variables.
Osea que, no tenemos que definir automaticamente un tipo de datos de una variable como en muchos otros lenguajes.

Javascript automaticamente calcula si una variable es una cadena, un booleano, etc.
Si le asignamos despues otro valor a la misma variable de otro tipo de dato, javascript automaticamente cambia el tipo de dato de la variable.
*/

var fullAge = true;
console.log(fullAge);

var job; //No le asigno un valor a la variable.
console.log(job);

job = 'Teacher';
console.log(job);

//Las variables no pueden empezar con numeros o simbolos a excepsion del signo dolar o guion bajo.
//LO MISMO SUCEDERÁ si uso el simbolo en el medio del nombre de la variable.

//var 3years = 3; MAL
var _3years = 3; //BIEN
var $years = 3;  //BIEN
//var %years = 3; MAL
//var Maca&Miriam = 'Maca y Miriam'; MAL

//La ultima regla es que no podemos usar palabras clave de Javascript reservadas como nombres de variables.

//var delete = 23;
//var if = 23;
