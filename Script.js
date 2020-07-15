/******************************************************************************
* IF / else statements
*/

var firstName = 'John';
var estadoCivil = 'soltero';

// se usan 3 = para equivalencias.
if (estadoCivil === 'casado') {
    console.log(firstName + ' esta casado!');
} else {
    console.log(firstName + ' esperemos que se case pronto :)')
}

var estaCasado = true; 
if (estaCasado) {
  //Como ya sabemos que estaCasado es un booleano y tiene asignado un valor, el condicional para preguntar si es verdadero no es necesarios en este caso.
  console.log(firstName + ' esta casado!');
} else {
  console.log(firstName + ' esperemos que se case pronto :)')
}

/*Ahora escribamos una mejor version del codigo del coding challenge*/

var pesoJohn = prompt('Cual es el peso de John en Kg?');
var alturaJohn = prompt('Cual es la altura de John en metros?');

var pesoMark = prompt('Cual es el peso de Mark en Kg?');
var alturaMark = prompt('Cual es la altura de Mark en metros?');

var BMIJohn = pesoJohn / (alturaJohn * alturaJohn);
var BMIMark = pesoMark / (alturaMark * alturaMark);

console.log('El BMI de John es: ' + BMIJohn + ' y el BMI de Mark es: ' + BMIMark);

var esBMIMarkMayor = BMIMark > BMIJohn;

if (esBMIMarkMayor) {
  console.log('Es el BMI de Mark mayor al de John');
} else {
  console.log('Es el BMI de John mayor al de Mark');
}


