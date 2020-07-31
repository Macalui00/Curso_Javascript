/* SECCION 4: Creando un Juego
Lección 48: first DOM Access and Manipulation */

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

Este juego se llama "The Pig Game" si uno lo busca en google podra encontrar las mismas reglas y/o variaciones.
Primero necesitamos un grupo de variables pata hacer un seguimiento de las cosas más importantes que suceden en nuestro juego.
Y probablemente la cosa más importante de todo es el puntaje de cada jugador.

*/
//var score1, scored2 = 0;

var scores, roundScore, activePlayer, dice;
scores = [0,0];
roundScore = 0;
activePlayer = 0; //0 el primer jugador, 1 el segundo jugador.

//ahora creamos el dado, para eso necesitamos calcular un numero al azar.
/*
Para esto utilizaremos el objeto Math que es un javascript object incorporado que tiene muchas propiedades y metodos
Math.random() por consola me vuelve numeros random entre 0 y 1, pero, en nuestro caso, lo que queremos es un numero entre 1 y 6,
entonces lo primero que haré es multiplicar este valor por 6:

Math.random()*6, si multiplico por 6 obtendré valores entre 0 y 5.

El problema aca es que hay decimales. No queremos decimales, queremos enteros.
Hay otro metodo: floor():

Math.floor(4.8) me retorna 4.

Entonces:
Math.floor(Math.random()*6), me retornará un numero random entre 0 y 5 sin decimales.

El tema es que nosotros queremos numeros random entre 1 y 6, entonces lo que tenemos que hacer es simplemente sumarle 1.
Math.floor(Math.random()*6)+1
*/

dice = Math.floor(Math.random()*6)+1;
console.log(dice);

/*Esto fue la primera cosa, la segunda cosa a hacer es el DOM manipulation. 
El objeto que nos da acceso al DOM es el objeto documento

Entonces, hay muchos metodos que podemos usar para seleccionar elementos de nuestra pagina web
Y la más util es el querySelector. ¿Y como es que funciona?
Es muy util porque nos permite seleccionar cosas de la misma manera que lo hacemos en css.
La unica diferencia es que solo selecciona el primer elemento que encuentra, pero hay una solucion para eso que se verá mas adelante...
Por ahora lo unico que necesitamos saber es que es muy facil seleccionar cosas con querySelector.

Entonces vamos a seleccionar algo de nuestra pagina web:
Ejemplo, supongamos que quiero seleccionar el string que dice el puntaje actual del jugador 1 (el que esta debajo de current
    en el cuadro rojo).

*/

//hasta el querySelector, hemos seleccionado el elemento, ahora si queremos cambiar el texto, necesitamos otro metodo que es: textContent
document.querySelector('#current-' + activePlayer).textContent = dice;
                        // current- 1/0

/*Hay dos maneras de cambiar el contenido del elemento seleccionado, una es el textContent, el cual 
solo puede establecer texto sin formato, por lo que no contiene html

Pero si queremos poner algo de HTML tambien en el elemento seleccionado, entonces tenemos que usar el metodo HTML. 
Entonces veamos como podria funcionar:
*/

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//veremos que en cuadro rojo, aparecera un texto en italica
//en resumen con el textContent, solo podemos configurar texto y no HTML.

/*Acabamos de hacer nuestra primera manipulacion DOM.

Supongamos que queremos leer algo de nuestra pagina web y almacenarlo en una variable:
*/

var x = document.querySelector('#score-0').textContent; // en este caso no es igual a nada porque solo queremos que lea el texto.
console.log(x);
//Entonces funciona para setear y para leer, el primero con el = es el setter y el segndo es un getter, porqeu obtenemos el valor

//Otra cosa que queremos hacer es esconder el dado al principio cuando abrimos el juego.
//en este caso no tiene un id, pero si una clase por eso empieza con '.' y no con '#'.
//Ademas de esto, queremos cambiar el estilo de la imagen del dado, por lo cual, usamos el metodo style y luego seleccionamos el estilo que queremos que cambiar:
document.querySelector('.dice').style.display = 'none';
//display = none, en css nos permite ocultar un elemento.

/*---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Leccion 49: Events (relacionado con el DOM y DOM MANIPULATION) and Event Handling: Rolling The Dice

Eventos: son como notificaciones que son enviadas para notificar a nuestro codigo de que algo ha ocurrido en nuestra pagina web.
Y los eventos se desencadenan por cosas como cliquear un boton, cambiar el tamaño de una página, desplazarse hacia abajo o presionando una tecla.

Podemos usar Event Listeners para codificar respuestas a todos estos eventos, como abrir una ventana emergente, mostrar animaciones, etc.
Entonces el Oyente de Evento es simplemente una funcion que realiza una accion basado en cierto evento. Espera a que un evento en particular suceda.

*/

//Ahora vallamos a codear lo que corresponde al boton roll the dice:
//El addEventListener tiene dos argumentos, el 1ero es el tipo de evento que en este caso es simplemente hacer click
//El segundo elemento es la funcion que será llamada tan pronto como ese evento suceda.

function btn(){
    
}

document.querySelector('.btn-roll').addEventListener('click', btn);