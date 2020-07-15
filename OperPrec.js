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