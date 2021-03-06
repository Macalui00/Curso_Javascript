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
switch (job){
    //Podemos poner multiples causulas case para un mismo pedazo de codigo
    case 'instructor':
    case 'teacher':
        console.log(firstName + ' enseñandole a los chicos como codear.');
        break; //Agregamos el break para que cuando termine de mostrar profesor no siga evaluando los otros dos casos.
    case 'driver':
        console.log(firstName + ' conduce un uber en av. Corrientes.');
        break;
    case 'designer':
        console.log(firstName + ' diseña hermosas páginas web.');
        break;
    default:
        console.log(firstName + ' hace algo más.');
}

/*if (age < 13){
    console.log(firstName + ' es un niño.');
} else if (13 <= age <= 20){ //entre 13 y 20 === age >=13 AND age < 20
    console.log(firstName + ' es un adolescente.');
} else {
    console.log(firstName + ' es un hombre.');
}

El SWITCH SE VE MAS PROLIJO QUE ESTO DE ARRIBA:
*/

//lo que hacemos en el switch de arriba es que tenemos una variable comparamos todos los casos con esa variable
//este funciona un poco diferente:
switch (true){
    case (age < 13):
        console.log(firstName + ' es un niño.');
        break;
    case (13 <= age <= 20):
        console.log(firstName + ' es un adolescente.');
        break;
    case (20 <= age <= 30):
        console.log(firstName + ' es un adulto joven.');
        break;
    default:
        console.log(firstName + ' es un hombre.');
}