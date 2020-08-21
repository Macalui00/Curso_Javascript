/* Desafio de codeo

Creaemos un juego de preguntas en la consola:

1. Construir una funcion constructora llamada Pregunta para describir una funcion. Una pregunta debe incluir:
    a. La pregunta misma
    b. Las respuestas que el jugador podra elegir cual es la correcta (elegir alguna estructura de datos correcta, array, objeto, etc.
    c. Numero correcto (podría ser un numero)

2. Crear un conjunto de preguntas usando el constructor.

3. Almacenarlas dentro de un array

4. Seleccionar una pregunta random y mostrarla por consola, junto con las respuestas posibles (cada pregunta debe tener un numero) (Pista: escribir un metodo en lso objetos pregunta para esta tarea).

5. Usar la funcion 'prompt' para preguntar la respuesta correcta al jugador. el jugador debe ingresar el numero de pregunta correcta.

6. verificar si la respues es correcta e imprimir por consola si la respuesta es correcta o no (pista escribir otro metodo para esto).

7. Supone que este codigo puede ser utilizado por otros programadores para ser usado en su codigo. Asi que, asegurate de que tu codigo es privado y no interfiere con otros códigos de programadores.

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.

*/

//Funcion constructora Pregunta
(function(){
var Pregunta = function(pregunta, respuestas, respCorrecta){
    this.pregunta = pregunta;
    this.respuestas = respuestas;
    this.respCorrecta = respCorrecta;
  }
  
  //Metodo del objeto Pregunta para mostrar la pregunta y sus respuestas
  Pregunta.prototype.mostrarPregYResp = function(puntaje){
      console.log(this.pregunta);
    for (var i = 0; i < this.respuestas.length; i++) {
        console.log(i + '. ' + this.respuestas[i]);
      };
    
    var respuesta = parseInt(prompt("Seleccione el numero de respuesta correcta"));
    while(typeof(respuesta) !== typeof(this.respCorrecta)){
        var respuesta = parseInt(prompt("Respuesta incorrecta. Seleccione el numero de respuesta correcta"));
    }
    if (respuesta == this.respCorrecta){
        console.log("Respuesta correcta");
        puntaje++;
        console.log("Tu puntaje actual es: " + puntaje);
    } else {
        console.log("Respuesta incorrecta");
    };
    return puntaje;
  }

  //Defino tres preguntas con sus respuestas
  var respuestas1 = ['La Plata', 'Capital Federal', 'La Pampa', 'Cordoba Capital'];
  var pregunta1 = new Pregunta('¿Cual es la Capital de Argentina?', respuestas1, 1);
  var respuestas2 = ['El Ceibo', 'El jacarandá', 'El quebracho'];
  var pregunta2 = new Pregunta('¿Cual es el arbol nacional de Argentina?',respuestas2, 0);
  var respuestas3 = ['El alfajor', 'El flan con dulce de leche', 'El pionono', 'Las marquesas'];
  var pregunta3 = new Pregunta('¿Cual no es un postre típico de Argentina?', respuestas3, 3);

  //Creo el set de preguntas con las instancias pregunta creadas arriba
  var setPreguntas = [];
  setPreguntas.push(pregunta1);
  setPreguntas.push(pregunta2);
  setPreguntas.push(pregunta3);

  //Elige una pregunta random de la lista de preguntas
  function preguntaRandom(listaPreg, puntaje){
    var random = Math.floor(Math.random() * listaPreg.length);  // retorna un numero entero random entre 0 y length-1
    return listaPreg[random].mostrarPregYResp(puntaje); //se retorna el puntaje
  }

  //Función para saber si desea continuar jugando
  function continuarJugando(){
    continuar = prompt("Continuar jugando? S/N");
    while(continuar !== 'S' && continuar !== 'N'){
        continuar = prompt("Respuesta incorrecta. Continuar jugando? S/N");
    }
    return continuar;
  }
  
  //Funcion principal para el juego
  function empezar(){
    var puntaje = 0;
    puntaje = preguntaRandom(setPreguntas, puntaje);
    var continuar = continuarJugando();
    while (continuar === 'S'){
        puntaje = preguntaRandom(setPreguntas, puntaje);
        continuar = continuarJugando();
    }
    console.log("Tu puntaje final es: " + puntaje);
  }
  empezar();

  })();

  
/*
  function crearPreguntasYRespuestas(){
    var setPreguntas = [];
    var pregunta = prompt("Ingrese pregunta");
    var respuestas = [];
    respuestas.push(prompt("Ingrese primera respuesta"));
    var continuar = 'S';
    while (continuar === 'S'){
        respuestas.push(prompt("Ingrese segunda respuesta"));
        continuar = prompt("Ingresara más respuestas? S/N");
        while(continuar !== 'S' && continuar !== 'N'){
            continuar = prompt("Respuesta incorrecta. Ingresara más respuestas? S/N");
        }
    }
    var respCorrecta = parseInt(prompt("Ingrese numero de respuesta correcta, considerando que la primera respuesta es la 0."));
    while (respCorrecta >= respuestas.length){
        respCorrecta = parseInt(prompt("Ingrese numero de respuesta correcta, considerando que la primera respuesta es la 0."));
    }
    
  }
 */