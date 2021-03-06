/* Listas

Son colecciones de variables que INCLUSO tienen diferentes tipos de datos.
Hay diferentes formas de utilizar arrays pero la forma mas usual es: usando [] y los diferentes valores dentro:
*/

var nombres = ['Mario', 'Moria', 'Ludmila']; //La versión más utilizada.
var años = new Array(1998,1996,1998); //La versión menos utilizada que la anterior.

//Los arrays tienen base cero, es decir, el primer elemento esta en la posicion 0.

//Como acceder a los elementos en un array:
console.log(nombres[0]);

//Ver la lista entera:
console.log(nombres);

//Ver la longitud de la lista:
console.log(nombres.length);

//Modificar un elemento en la lista:
nombres[1] = 'Mirtha';
console.log(nombres);

//Podemos agregar datos en el array:
//nombres[5] = 'Juana';
//console.log(nombres);
//nos quedan dos espacios vacios en el medio, 3 y 4.

//para poder agregar a Juana inmediatamente como ultimo elemento despues del ultimo elemento actual de la lista, podemos usar:
nombres[nombres.length] = 'Juana';
console.log(nombres);

//Diferentes tipos de datos:
var John = ['John','Smith', 1990, 'teacher', false];
//ahora tenemos diferentes tipos de datos todo en una estructura
//Hay diferentes tipos de funciones que podemos aplicar a los arrays, se llaman metodos y son especificas de los arrays.
//Por ahora debemos saber que podemos hacer cosas como:

John.push('blue'); //agregar un elemento al final de la lista.
John.unshift('Mr.'); //Parecido al push pero en este caso, agrega elemento al principio de la lista.
console.log(John);

John.pop(); //Remueve elementos del final de la lista.
John.shift(); //Remover elementos del principio de la lista.
console.log(John);

console.log(John.indexOf(1990)); //IndexOf lo que retorna es la posicion en la cual se encuentra el elemento indicado en la lista.
console.log(John.indexOf(23)); //Si le solicito la posicion de un elemento que no esta, entonces me retorna -1.
//Entonces nos permite saber si un elemento esta o no.

var isDesigner = John.indexOf('designer') === -1 ? 'John no es un diseñador' : 'John es un diseñador';
console.log(isDesigner);
