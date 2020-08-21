/*Closures

El año de jubilación es un año que varia pais a pais, de manera qeu calcular la edad de jubilación varia segun pais.
Creamos una funcion para cada pais, es algo similar a crear las preguntas para diferentes trabajos como hicimos en la clase anterior.
*/

function jubilacion(añoJubilacion){
    var a = " años que quedan antes de jubilarse."

    var hoy = new Date();
    var añoActual = hoy.getFullYear();

    return function(añoNacimiento){
        var age = añoActual - añoNacimiento
        console.log(añoJubilacion - añoNacimiento + a);
    }
}

/*¿Porque esta función la escribimos de esta manera? Es porque queremos usar closures acá.


La edad jubilatoria actual en Argentina es 65 para hombres, 60 para mujeres
*/

var jubilacHArg = jubilacion(65); //Esto me retorna una funcion donde la edad jubilatoria es a los 65 para los hombres
//Ahora podemos calcular cuantos años nos quedan para jubilarnos si vivimos en argentina y somos hombres
jubilacHArg(1990);

/*

Hay algo muy interesante en el funcionamiento de esto de arriba, porque en el primer paso ejecutamos la primer funcion
y nos retorna la segunda. Entonces, el contexto de ejecucion de la primera termina, pero cuando ejecutamos la segunda
función, se utiliza tanto el parametro de entrada de la primera como las variables declaradas dentro de la primera funcion.
Entonces, de alguna manera todavía podemos utilizar estas variables incluso despues de que la funcion primera que declara
las varianles, ya detuvo su ejecución. ESTO ES EL CLOSURE O CIERRE.

*/

//Tambien podemos hacerlo de la siguiente manera:
jubilacion(65)(1990);

/*Ahora bien, veamos como funciona detras de escenas:
De nuevo, podemos resumir como funciona un cierre como:
Una funcion interna siempre tiene acceso a las variables y parámetros de su función externa, incluso despues de que la
función externa ha regresado/finalizado.

Entonces veamos que sucede cuando llamamos a nuestra funcion de jubilacion:
Como sabemos, la nueva funcion obtiene un nuevo contexto de ejecucion que se coloca en la cima de la pila de contexto de ejecucion
Ese contexto de ejecucion tiene un objeto que almacena las variables, la cadena de alcance y esa variable. entonces veamos la
cadena de alcance para la funcion de jubilacion, que significa que las variables a las que tiene acceso la funcion. Y recordar que
la cadena de alcance es como un puntero a todos los objetos variables a los que tiene acceso la funcion. Entonces, por supuesto,
la funcion tiene acceso al argumento del año de jubilacion, establecido en 65 en este caso, y una variable que contiene nuestro string
Luego la funcion retorna, una vez qe la funcion retorna, ahora el contexto de ejecucion de la funcion de retiro se ha ido efectivamente,
y con eso, el objeto variable y toda la cadena de alcance deberian desaparecer... Pero, en realidad, no, el secreto del closure es que,
incluso despues de que una funcion retorna, y el contexto de ejecucion se ha ido, el objeto variable continua estando alli. Todavia
se encuentra alli en memoria y se puede acceder, y es por eso que todavia esta ahi en el scope chain o cadena de alcance.

Recordará que el scope chain o cadena de alcance es de hecho un puntero a objetos varibales, y en este caso, la variable objeto que
tenemos acá en la pila. EL SCOPE CHAIN SIEMPRE PERMANECE INTACTO.

HAY QUE NOTAR QUE NO ESCRIBIMOS CLOSURES MANUALMENTE, ES ALGO QUE JAVASCRIPT HACE AUTOMATICAMENTE POR NOSOTROS.

*/

/*Retornando a la funcion de jubilacion que creamos, es similar a algo que vimos en otra leccion, ya que tenemos una funcion mas general
que nos permitira crear funciones mas especificas.
Tenemos una funcion para determinar la jubilacion dependiendo del pais y una funcion especifica para cada pais que queramos.
Y este es, solo uno de los muchos usos que uno puede tener de aplicar closures */

//Ahora creemos mas funciones

var jubilacionAlem = jubilacion(65);
var jubilacionIslandia = jubilacion(67);

jubilacionAlem(1990);
jubilacionIslandia(1990);

/*El challenge de ahora es escribir la funcion de las preguntas pero utilizando el poder de los Closures */
function preguntaEntrevista(trabajo) {
    return function(nombre){
        if (trabajo === 'diseñador'){
            console.log(nombre + ', puedes explicarnos cual fue tu experiencia diseñando?');
        } else if (trabajo === 'profesor') {
            console.log('Que materia enseñas, ' + nombre + '?');
        } else {
            console.log('Hola, ' + nombre + ' , a que te dedicas?');
        }
    }
}

preguntaEntrevista('profesor') ('Juan');

/*La diferencia entre la forma anterior y esta, es que ahora, la decision se toma dentro de la funcion qeu retornamos,
y eso se debe a que podemos utilizar la funcion de trabajo despues de que la funcion preguntaEntrevista haya finalizado.
Esta es una mejor manera de hacerlo, esto es código limpio.*/