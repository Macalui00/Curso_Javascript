//Funciones

/*No importa si la llamada de la funcion esta arriba o abajo de la declaracion de la funcion*/
calculateAge(1965);

function calculateAge(año){
    console.log (2016- año);
}

calculateAge(1965);

/*En cambio si se trata de una expresion de funcion, si colocamos la llamada arriba, no funciona*/

/*retirement(1990);*/

var retirement = function(year){
    console.log(65 - (2016 - year));
}

retirement(1990);

//variables

//que pasa si usamos esta funcion antes de que esta sea realmente declarada?
console.log(age); //nos retorna undefined

var age = 23;
//console.log(age);

function foo (){
    console.log(age); //la variable local age esta indefinida
    var age = 65;
    console.log(age); // me muestra el valor de la variable age dentro de esta funcion
}

foo();
console.log(age); //nos retorna el valor de la variable global age.