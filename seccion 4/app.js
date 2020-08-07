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

var scores, roundScore, activePlayer, gamePlaying;
// scores = [0,0];
// roundScore = 0;
// activePlayer = 0; //0 el primer jugador, 1 el segundo jugador.

init();

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
/*
dice = Math.floor(Math.random()*6)+1;
console.log(dice);*/

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
//document.querySelector('#current-' + activePlayer).textContent = dice;
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
/*
var x = document.querySelector('#score-0').textContent; // en este caso no es igual a nada porque solo queremos que lea el texto.
console.log(x);*/
//Entonces funciona para setear y para leer, el primero con el = es el setter y el segndo es un getter, porqeu obtenemos el valor

//Otra cosa que queremos hacer es esconder el dado al principio cuando abrimos el juego.
//en este caso no tiene un id, pero si una clase por eso empieza con '.' y no con '#'.
//Ademas de esto, queremos cambiar el estilo de la imagen del dado, por lo cual, usamos el metodo style y luego seleccionamos el estilo que queremos que cambiar:
// document.querySelector('.dice').style.display = 'none';
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
/*
function btn(){
    //hace algo aca
}
btn();

document.querySelector('.btn-roll').addEventListener('click', btn);
*/

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

/* Pero tambien puedo hacer lo siguiente: */
document.querySelector('.btn-roll').addEventListener('click', function(){
    if (gamePlaying){
        //¿Que sucedera entonces ni bien cliqueen el boton:
        /* 1. el numero random, por lo que tomaremos la funcion que estaba arriba
        */
        var dice = Math.floor(Math.random()*6)+1;

        /* 2. Mostrar el resultado:  lo primero que tenemos que hacer es que vuelva a aparecer el dado ya que lo habiamos ocultado*/
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+ dice + '.png';

        /* 3. actualizar el round score solamente si el numero rolleado no es un 1 */
        if (dice > 1){
            //add score
            roundScore += dice; //Actualizamos el puntaje
            document.querySelector('#current-' + activePlayer).textContent = roundScore; //Lo mostramos por pantalla.
        } else { //Cuando el dado es igual a 1, es el turno del jugador 1
            //next player
            nextPlayer();
        }   
    }
    
    


});
//FUNCION ANONIMA que no tiene nombre y por eso no podemos usar afuera de este contexto.
//Como esta funcion no la queremos usar en otro lado ademas de este caso particular, es ideal que la definamos de esta manera.

/*-------------------------------------------------------------------------------------------------------------------------------------- 
Lección 50: Updating scores and changing th actibe player

En esta leccion podremos descubrir que es el operador ternario y aprenderemos como agregar, eliminar o alterar html clases.

(se completo el 3er paso de la función.)
*/

/*-------------------------------------------------------------------------------------------------------------------------------------- 
Leccion 51: Implementing Our 'Hold? Function and the DRY Principle

En esta leccion vamos a implementar nuestra funcion de retencion de puntaje (guardar puntaje acumulado) y vamos a ver un poco
del principio de NO TE REPITAS A VOS MISMO.

POR LO CUAL OTRA VEZ VAMOS A USAR UN EVENT LISTENER, Y EN ESTE CASO VA A SER PARA EL OTRO BOTON: HOLD. BUSCAMOS COMO SE LLAMA LA CLASE: "btn-hold"
*/

document.querySelector('btn-hold').addEventListener('click',function(){
    if (gamePlaying){
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore; //actualizamos el puntaje acumulado
        
        //Update the UI 
        document.querySelector('#score-' + activePlayer).textContent = scores [activePlayer]; //mostramos el nuevo puntaje acumulado por pantalla
        //el tema es que cuando lo actualizamos, se nos tiene que resetear el puntaje actual y tiene que pasar al siguiente jugador

        //Check if player won the game
        if (scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            //Para que el punto rojo desaparezca y que el ganador aparezca en letra roja:
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
            //Hay otro problema que tambien tenemos que corregir que es que si ya gano, podemos seguir presionando roll de dice y acumular puntaje...
            //ponemos el gameplaying en false
            gamePlaying = false;
        } else{
            //next player
            nextPlayer();
        }  
    }
});


//creamos una nueva funcion para pasar al nuevo jugador para justamente no romper el principio de no repetirse a sí mismo:
function nextPlayer(){
 //next player: usando el operador ternario
 activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 roundScore = 0; //se reseteea su contador a cero.

 //Hay que mostrar tambien que su contador se puso en cero en la interfaz de usuario.
 document.getElementById('current_0').textContent = '0';
 document.getElementById('current_1').textContent = '0';

 //Ahora lo que queremos hacer es cambiar lo que se ve en la intefaz, donde aparece el punto rojo y que el cuadro gris ahora tiene que ser el otro jugador.
 //document.querySelector('.player-0-panel').classList.remove('active'); //Seleccionamos con el Query selector la clase, y luego removemos de la lista de clases el active.
 //document.querySelector('.player-1-panel').classList.add('active'); //Seleccionamos con el Query selector la clase, y luego agregamos a la lista de clases el active.
 
//Ahora podemos ver de manera VISIBLE que el usuario 2 es el que esta activo.
 //Lo que si no cambio es el color del jugador "jugador 2": para lo cual hay una mejor forma de hacer lo anterior.

 document.querySelector('.player-0-panel').classList.toggle('active'); //Toggle me permite alterar una clase, si existe la quita, si no existe la crea
 document.querySelector('.player-1-panel').classList.toggle('active'); //Toggle me permite alterar una clase, si existe la quita, si no existe la crea

 //Otra cosa que queremos es que cuando se cambie de jugador, el dado no este visible:
 document.querySelector('.dice').style.display = 'none';

}


/* Lección 52: Creating a Game Initialization Function
Entonces ahora lo que haremos es implementar el botón de New Game
En este caso el nombre de la clase del boton es: 'btn-new'
*/

document.querySelector('.btn-new').addEventListener('click', init);

//Funcion para inicializar las variables
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
}


/*Leccion 53: Toques finales: una variable de estado
Que es una variable de estado? Simplemente nos dice la condicion de un sistema.
Esa es la definicion. Necesitamos una variable de estado cuando necesitamos recordar algo.
o necesitamos el estado de algo.

En este caso la variable será si nuestro juego se jugará o no se jugará


*/