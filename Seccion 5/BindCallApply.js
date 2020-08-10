/*En esta leccion hablaremos del poder de los metodos de llamada, aplicacion y vinculacion,
en pocas palabras, estos metodos nos permiten llamar a una funcion y establecería manualmente.
Asi que vamos a ver un pequeño ejemplo acá:*/

var john = {
    nombre: 'John',
    edad: 26,
    trabajo: 'profesor'
    presentacion: function(estilo, horaDelDia){
        if (estilo === 'formal'){ // Para que sepa que un caracter es parte del texto ejemplo ': \' 
            console.log('¡Buenos' + horaDelDia + ', damas y caballeros! Mi nombre es '+
            this.nombre + ', tengo ' + this.edad + ' años y soy ' + this.trabajo + '.');
        } else if (estilo === 'amigable'){
            console.log('Hola! Como estas? Soy ' + 
            this.nombre + ', tengo ' + this.edad + ' años y soy ' + this.trabajo + '.');
        }
    }
}

john.presentacion('formal', 'morning');

/*Imaginemos que queremos crear otro objeto y queremos usar el mismo metodo para ese otro objeto, el cual no tiene ese metodo presentacion.
Podemos utilizar el metodo llamada para hacer esto. Como se hace esto? El primer parametro del metodo llamada es establecer siempre esta variable..*/
var emily = {
    nombre: 'Emily',
    edad: 35,
    trabajo: 'diseñadora'
}
john.presentacion.call(emily, 'amigable','tardes'); //Esto se llama prestamos de metodo, porque de hecho, hemos tomado prestado el metodo de John para usarlo en el metodo emily

/*Hay un metodo muy similar a este metodo llamada que se llama metodo apply o metodo aplicacion, y la unica diferencia es que este acepta los argumentos como un array, de modo que
son solo dos argumentos, primero esta variable y luego un array donde van todos los demas argumentos, entonces seria algo como esto:*/

//john.presentacion.apply(emily, ['friendly','afternoon']);
//Ahora esto no va a funcionar porque nuestra funcion no espera recibir un array, no es cierto?
//Nuestra funcion presentacion espera dos variables normales, asi que lo comentaremos no mas.

//Ahora usaremos el metodo de enlace o bind method. El cual es muy similar al metodo de llamada por lo que tambien nos permite establecer esta variable explicitamente.
//La unica diferencia es que el bind no llama inmediatamente a la funcion, sino que genera una copia de la funcion para que podamos almacenarla en algun lugar.
// Y esto puede ser extremadamente util para crear funciones con argumentos preestablecidos, entonces veamos como:

//Bind retorna una funcion. el primer argumento de bind es establecer una variable, que en este caso realmente no importa, asi que pongamosle john y no voy a establecer acá el horaDelDia, asi que lo dejamos asi.
var johnFriendly = john.presentacion.bind(john, 'amigable', )
johnFriendly('días');
johnFriendly('noches');

/*Entonces bind nos permite PREESTABLECER ALGUNOS ARGUMENTOS aquí, y esto, lo que acabamos de hacer acá, tiene un nombre que es llevar o transportar o carrying, que es solo una tecnica en la que creamos una funcion 
basada en otra funcion, pero con algunos parametros preestablecidos.
Así que ahora hagamos lo mismo con emily*/
//ahora la primera variable importa, porque es la presentacion de Emily
var emilyFormal = john.presentacion.bind(emily, 'formal');
emilyFormal('tardes');

/*-------------------------------------------------------------------------------------------------------------*/
var años = [1990,1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcularEdad(el){
    return 2016-el;
}

function esMayorDeEdad(limite, el){ //El limite de edad que indica la mayoria de edad varia segun el pais, por eso le agregamos el parametro limite
    return el >= limite;
}

var edades = arrayCalc(años, calcularEdad)
//Ahora el problema de calcularEdad es que acepta dos argumentos pero nuestra funcion arrayCalc se puede usar con un argumento y dentro de la funcion
//llama a mayoria de edad con un solo argumento, la mejor idea sería llamar a la funcion con un limite de edad ya preestablecido

var mayoriaJapon = arrayCalc(edades, calcularEdad.bind(this, 20));
console.log(edades);
console.log(mayoriaJapon);

