/******************************************************************************
* Lógica Booleana
*/

var firstName = 'John';
var age = 16;

if (age < 13){
    console.log(firstName + ' es un niño.');
} else if (13 <= age <= 20){ //entre 13 y 20 === age >=13 AND age < 20
    console.log(firstName + ' es un adolescente.');
} else {
    console.log(firstName + ' es un hombre.');
}

/*
AND(&&) -> es True si TODO es True
OR (||) -> es True si UNO es True
NOT(!) -> invierte los valores True/False
*/