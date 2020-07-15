console.log('Hola mundo!!!');

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

/******************************************************************************
 * Operadores básicos: son como funciones escritas de una manera especial en javascript 
 */
 var year, yearJohn,yearMark,ageJohn,ageMark;
 year = 2020
 ageJohn = 28;
 ageMark = 33;

 //Operadores Matematicos.
 yearJohn = year - ageJohn;
 yearMark = year - ageMark;

 console.log(yearJohn);

 console.log(year + 2); //2022
 console.log(year * 2); //4040
 console.log(year / 10);

 //Operadores Lógicos.
/*
var johnOlder = ageJohn > ageMark;
console.log(johnOlder); //FALSE
*/

var johnOlder = ageJohn < ageMark;
console.log(johnOlder); // TRUE

//operador Typeof, los anteriores siempre requirieron dos cosas para comparar o agregar, etc.
console.log(typeof johnOlder); //como su nombre lo indica, nos retorna el tipo de dato que presenta una variable.
console.log(typeof ageJohn);
console.log(typeof 'Mark es mas viejo que John');
var x; //UNDEFINED
//Console.log(typeof x);

/******************************************************************************
* Operador de precedencia
*/

var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiples operadores
var isFullAge = now - yearJohn >= fullAge;//True

//¿Como sabe javascript que operador se ejecuta primero?
console.log(isFullAge); 

/*Para esto tenemos que pensar en la precedencia del operador, osea que operador se ejecuta primero.

  codingheroes.io/resources/ en la seccion de javascript, vamos a encontrar una tabla de precedencia de operadores.
  Los operadores que estan arriba en la lista, se ejecutaran antes qeu el resto que este abajo.

*/

/* en realidad tenemos tres operadores:
    - Operador de Asignacion
    - Operador Menos (-)
    - Operador Mayor o igual (>=)
   Y el orden en el que se ejecutan es:
    - Primero el (-)
    - Luego el >=
    - Y, por ultimo, asignación
*/

//Agrupacion ()
var ageJohn = now - yearJohn;
var ageMark = 35;
//var average = ageJohn + ageMark / 2;
//Y esto no esta del todo correcto, porque primero dividira la edad de mark y luego eso lo sumara a la edad de mark.
//Para calcular el promedio, debemos agregarle los parentesis.

var average = (ageJohn + ageMark) / 2;
console.log(average);

//Asignaciones multiples
var x, y;
x = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x);

x = y = (3 + 5) * 4 - 6;
console.log(x, y); //para mostrar por consola mas de una variable.
/* ¿Como realmente funcionan estas asignaciones multiples?

Esto tiene que ver que ademas de la precedencia de opeadores, tambien tenemos la asociatividad que es la direccion en la que se ejecuta la operacion.
Por ejemplo, en el caso de multiplicacion y suma tenemos como asociatividad: de izquierda a derecha.
Pero, hay operadores que trabajan al reves, como es el caso del operador de asignación.
Es por eso que esa asignacion funciona.

*/

//Mas operadores

//x = x * 2; repetimos la variable, esto lo podemos hacer mas simple:
x *= 2;
console.log(x);
//Lo mismo sucede con +, -, /
x += 10;
console.log(x);
//Estos se encuentran en la tabla, en la parte de operadores de asignacion, ya que, son operadores de asignacion.

//Increment en vez de x = x + 1 o x += 1 hay una version mucho mas simple:
x++;
console.log(x);
//lo mismo funciona con -- (decrement)
x--;
console.log(x);

/******************************************************************************
* coding challenge 1
*/

/*
Mark y John quieren calcular su indice de masa muscular, el cual es calculado usando la siguiente formula:
BMI = masa / (altura)^2 = masa / (altura * altura).
masa en KG y altura en Metros.

1.almacenar la masa y la altura de John y Mark en variables
2.calcular ambos BMIs.
3.crear un booleano que contenga informacion sobre como mark tiene un mayor BMI que john
4.Imprimir un strng en la consola conteniendo la variable del paso 3. (algo como:
    "es el BMI de mark mas alto que el de John? True").
*/

var pesoJohn = prompt('Cual es el peso de John en Kg?');
var alturaJohn = prompt('Cual es la altura de John en metros?');

var pesoMark = prompt('Cual es el peso de Mark en Kg?');
var alturaMark = prompt('Cual es la altura de Mark en metros?');

var BMIJohn = pesoJohn / (alturaJohn * alturaJohn);
var BMIMark = pesoMark / (alturaMark * alturaMark);

var esBMIMarkMayor = BMIMark > BMIJohn;

console.log('Es el BMI de Mark mayor al de John? ' + esBMIMarkMayor);

/******************************************************************************
* IF / else statements
*/


