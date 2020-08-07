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

console.log(BMIJohn, BMIMark);

var esBMIMarkMayor = BMIMark > BMIJohn;

console.log('Es el BMI de Mark mayor al de John? ' + esBMIMarkMayor);
