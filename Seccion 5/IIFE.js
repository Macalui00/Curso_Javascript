/* Expresiones de funciones inmediatamente invocadas

*//*
function game(){
    var score = math.random()*10;
    console.log(score >= 5);
}
game();*/

// Hay un problema con armar el juego de esta manera, que es que si el unico proposito
//es esconder la variable de puntaje desde el exterior, que significa hacer una variable privada
//no es necesario declarar toda la funcion con el nombre y que luego lo llame.

//Hay una mejor manera con el IIFE. Hacemos una funcion anonima entre parentesis.
(function(){
    var score = math.random()*10;
    console.log(score >= 5);
}) ();

/*Si yo defino una funcion de la siguiente manera
function(){
    
}
sin nombre, es una declaracion de funcion, pero una funcion sin nombre, entonces arrojará un error,
así que basicamente necesitamos engañar al analizador y hacerle creer que lo que tenemos aca es una
expresion y no una declaración. Y, la solucion es poner toda la funcion en un parentesis, porque, en
JavaScript, lo que está entre paréntesis no puede ser una declaración, y así, JavaScript sabrá que
debe tratar esto como una expresion y no como una declaración.

Y luego de esto, solo tenemos que invocar la función, porque, si no lo hicieramos, no le pusieramos
los parentesis, nunca se llamaría, y nunca se haría nada.

con esto obtenemos privacidad:*/
//console.log(score); //no podremos ver la variable puntaje.

/*Tambien podemos pasar argumentos al IIFE. Por lo que podriamos extender nuestra funcion, agregando un
parametro llamado goodLuck al juego, y cuanto mas buena suerte hayamos agregado al juego, mayor probabilidad
de que ganemos el juego.
 */

(function(goodLuck){
    var score = math.random()*10;
    console.log(score >= 5 - goodLuck);
}) (5); //le pasamos goodLuck = 5

/*Podemos llamar solo a un IIFE una vez, a la derecha porque esta funcion no esta asignada a ninguna variable.
Pero eso no es un problema en absoluto, porque en este caso no estamos usando la función para crear una pieza
de código reutilizable, todo lo que queremos aca es crear un nuevo ambito, que este oculto desde el exterior,
para que podamos poner variables de manera segura. Y con esto, obtenemos privacidad de datos, y tambien no
interferimos con otras variables en nuestro contexto de ejecución global. Entonces, si esto es así, entonces si
esto es exactamente lo que queremos, entonces IIFE es la solución perfecta.*/