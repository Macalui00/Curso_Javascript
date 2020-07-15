/******************************************************************************
* The ternary Operator (tambien llamado conditional operator) y switch statements
*/

//ternary operator
var firstName = 'John';
var age = 16;

//condicion '?' que queremos que suceda si la condicion es verdaera (ahora la parte del else para eso) ':' 
age >= 18 ? console.log(firstName + ' toma cerveza.') : console.log(firstName + ' toma jugo');
// edad >= 18? entonces toma cerveza sino toma jugo.

var drink = age >= 18 ? 'beer' : 'jouice';
console.log(drink);

//alternativa a: var drink = age >= 18 ? 'beer' : 'jouice';
/*
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/

//claramente es mas practico el operador ternario cuando son cosas simples.

//El caso del Switch es como tener un monton de IF anidados.
var job = 'teacher';
