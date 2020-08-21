//Funciones Constructoras:

var john = {
  nombre: 'John',
  añoNacim: 1990,
  trabajo: 'profesor'
}
/*esta es la manera en la que estuvimos creando objetos hasta el momento.

Pero imaginemos que queramos crear un monton de objetos con diferentes nombres, edades y trabajos.
Hay muchas formas de crear objetos pero la mas popular es usar algo llamado funcion constructora.
Y esto es un patron de javascript muy comun. Y el patron es algo asi como una forma estandar que tenemos
de resolver un problemas siempre de la misma manera.

Entonces la funcion constructora es un patron para escribir un modelo, como hemos estado hablando antes.
queremos que este constructor se llame persona, y la convención habitual en JavaScript es que siempre 
escribimos constructores de funciones con una letra mayuscula al principio del nombre

Las variables en los parametros serán las que queremos establecer en nuestro objeto.
*/
var Persona = function(nombre, añoNacim, trabajo){
  this.nombre = nombre;
  this.añoNacim = añoNacim;
  this.trabajo = trabajo;/*
  this.edadCalculada = function(){
    console.log(2016 - this.añoNacim);
  }*/ //y entonces la remuevo de acá
}

//lo unico que tenemos que hacer es poner Persona punto y prototype, y luego agregar nuestra funcion ahi:
Persona.prototype.edadCalculada = function(){
  console.log(2016 - this.añoNacim);
}

Persona.prototype.lastName = 'Smith';
//una vez creada la funcion constructora, podemos usarla para crear el objeto John.
//esto se llama instanciacion
var john = new Persona('John', 1990, 'profesor');

/*Para entender como funciona la funcion constructora, primero tenemos que entender qeu hace el nuevo operador
Que hace el nuevo operador, primero se crea un nuevo objeto VACIO. luego la funcion constructora es llamada.
Llamar a una funcion crea un nuevo contexto de ejecución que tambien tiene una variable.
Ahora, sabemos que una funcion regular llamamos a esta variable que apunta al objeto global.
Pero si ahora miramoa nuestra funcion constructora, entonces veeremos que si tuvieramos esta variable apuntando
al objeto no sería muy util no? Porque así, simplemente estableceriamos todas estas propiedades en el objeto
global. Y eso, por supuesto, no es lo que queremos. y es por eso que el nuevo operador se ocupa de esto.
Y hace que esta varianle de la funcion apunte al objeto vacio que fue creado al principio por el nuevo operador.

Entonces, lo que hace la funcion constructora es señalar a esta variable y no al objeto global...
 */

/* AHORA AGREGUEMOS HERENCIA A NUESTRO OBJETO, Y PARA ESO, VAMOS A TRAER DE VUELTA NUESTRA FUNCION DE EDAD CALCULADA
ENTONCES AHORA SUPONGAMOS QUE QUERAMOS AGREGAR UN METODO A NUESTROS OBJETOS.
*/
john.edadCalculada();

var jane = new Persona('Jane', 1969,'diseñadora');
var marcos = new Persona('Marcos', 1948, 'jubilado');

/*Hay un tema, estas tres instancias de objeto persona ahora tienen las mismas funciones, en este caso el codigo
es de una linea. Pero, la realidad es que podriamos tener muchas lineas de codigo, y este código estaría repetido
por tres, no es muy eficiente verdad? Y es por eso que usamos herencia de la misma manera que lo hemos aprendido en
la ultima leccion.
Lo que hemos aprendido en la ultima leccion es que hay que agregar todos los metodos y propiedades que queramos 
heredar en la propiedad de prototipo del constructor. Entonces hagamos eso.
*/

/*Entonces si vuelvo a cargar todo, los tres objetos no tendran esta funcion pero si tendran acceso a ella y podran
usarla.  */

jane.edadCalculada();
marcos.edadCalculada();

/*Entonces una vez mas, el metodo no esta mas en el constructor. Pero podemos seguir usandola por ser una propiedad
del prototipo de nuestra funcion constructora.
Esto es la herencia en funcionamiento.

Tambien podemos agregar propiedades en vez de metodos en el prototipo pero realmente no es muy común.*/

console.log(john.lastName);
console.log(jane.lastName);