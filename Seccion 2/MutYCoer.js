/******************************************************************************
 * Mutacion de variables y coercion de tipo. 
 */

 //Vamos a ver que pasa cuando mostramos por consola dos variables:
 console.log(firstName + ' ' + age); // funciono todo como si fueran Strings y esto se debe a algo llamado coercion de tipos
 //Javascript convierte variables de un tipo de dato a otro automaticamente.

 var job, isMaried; //declaro varias variables juntas
 job = 'teacher'; // y le asigno valores en diferentes lineas.
 isMaried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMaried);

//Mutacion de variables:
age = 'twienty eight'; //javascript convierte automaticamente la variable age de un tipo de dato numerico a un string.
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMaried);
//Alert pequeña ventana emergente cuando uno ejecuta el codigo en el browser.

//Obtener informacion a traves del usuario:
var lastName = prompt('what is his last name?'); //prompt me permite solicitar por pantalla una variable, esta funcion retorna una variable.
console.log(firstName + ' ' + lastName);
