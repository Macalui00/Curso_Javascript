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