//Valores de verdad y operadores de equivalencia:

/* Para Javascript, un valor falso es un valor que se considera falso cuando se evalua en una condicion IF/ELSE
Y los valores que son falsos en Javascript son indefinidos, nulos, cero, cadenas vacias y valores no numéricos
Pueden haber más...
Esos 5 valores se convierten en falso cuando son evaluados en una condicion de verdad o falsedad.
Por eso los llamados Falsy (falsamente), porqeu realmente no son falsos pero si resultaran falsos cuando se evaluen en
una condicion IF/ELSE.
Y los Truthy values, son aquellos que son considerados verdaderos cuando se los evaluan en una condicion de enunciado IF/ELSE
Que corresponden a todos los valores que no son Falsy.
*/
//Caso variable es UNDEFINED
var height;

//Caso variable esta definida:
//height = 23;

//Caso variable igual a 0.
//height = 0;

if (height) {
    console.log("la variable esta definida");
} else { //Variable indefinida, = a cero.
    console.log("la variable no ha sido definida");
}
//Caso variable igual a 'twenty'
//height = 'twenty';

//Caso variable igual a '' (cadena vacia)
//height = '';

// Lo que podemos hacer para solucionar el problema de variable = 0 y que diga qeu esta definida es lo siguiente:
if (height || height === 0) { //esto soluciona el problema, verificamos si la variable existe o si es igual a 0.
    console.log("la variable esta definida");
} else { //height = ''
    console.log("la variable no ha sido definida");
}

//Ahora hablemos de los dos diferentes operadores de equivalencia 
// ===: este es para comparacion de equivalencia estricta
// ==: Operador de equidad NO ESTRICTO. Este tiene cohercion de tipos, esto quiere decir que los dos tipos de datos de las dos variables no tiene porque matchear

// Equality operators
height = 23;
// == CON COHERSION DE TIPOS
if (height == '23') { //Lo que esta sucediendo con esto es que el 23 de string lo convierte en un numero y entonces ahi dice que son lo mismo.
    console.log("El operador == tiene cohersion de tipos");
}
// === SIN COHERSION DE TIPOS
if (height == '23') { //Dá FALSO. NO SON LO MISMO.
    console.log("El operador == tiene cohersion de tipos");
}