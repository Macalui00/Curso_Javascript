/* AHORA VAMOS A HABLAR DE OTRA MANERA DE CREAR OBJETOS QUE HEREDAN DE UN PROTOTIPO, y ese es
object.createMethod
Con esto, las cosas funcionan un poco diferente. Primero, definimos un objeto que actuará como
un prototipo y luego creamos un nuevo objeto basado en ese mismo prototipo.
Entonces, hagamos esto ahora.

Primero, tenemos que escribir el prototipo como un objeto simple.
*/
//Podemos notar que ya no usamos la mayuscula al principio, porque no es un constructor de funciones.
var personaProto = { //lo que quiero en un prototipo, como antes, es calcular el metodo de edad
    calcularEdad: function() {
        console.log(2016-this.añoNacim);
    } //ahora no hay un año de nacimiento en ningun lado pero vamos a preocuparnos de eso despues.

}

//Vamos a crear a john de nuevo
var john = Object.create(personaProto);

//pongo en la consola: john

john.nombre = 'John';
john.añoNacim = 1996;
john.trabajo = 'profesor';

//Vuelvo a poner en la consola: john, ahora se parece mas al objeto que teniamos en otras lecciones
/*Sin embargo, no era la forma ideal en que teniamos que llenar esto ahi. El objeto que creamos 
estaba vacio, y tuvimos que llenarlo abajo.
Entonces esta vez, lo vamos a hacer de diferente manera porqeu el objeto.create acepta un segundo
parámetro. Así que, hagamoslo ahora para otra persona:
*/
//le pasamos un segundo argumento que es un objeto que especifica los datos que queremos tener en
//el objeto.
var jane = Object.create(personaProto, {
    nombre: { value: 'Jane' },
    añoNacim: { value: 1969},
    trabajo: { value: 'diseñador'}
})

/* LA DIFERENCIA ENTRE CREAR UN OBJETO CON OBJECT.CREATE Y LA FUNCION CONSTRUCTORA ES QUE
ESE OBJETO.CREATE CONSTRUYE UN OBJETO QUE HEREDA DIRECTAMENTE DESDE EL QUE PASAMOS AL PRIMER
ARGUMENTO.
MIENTRAS QUE, POR EL OTRO LADO, LA FUNCION CONSTRUCTORA, QUE EL OBJETO RECIEN CREADO HEREDA
DE LA PROPIEDAD DEL PROTOTIPO DEL CONSTRUCTOR. ESA ES LA GRAN DIFERENCIA.

DE HECHO, UNO DE LOS BENEFICIOS DEL OBJECT.CREATE ES QUE NOS PERMITE IMPLEMENTAR ESTRUCTURAS
HEREDADAS REALMENTE COMPLEJAS DE UNA MANERA MAS FACIL QUE LAS FUNCIONES CONSTRUCTORAS PORQUE
NOS PERMITE ESPECIFICAR DIRECTAMENTE QUE OBJETO DEBE SER UN PROTOTIPO.

Entonces estas dos formas de crear objetos que vimos, son las dos maneras mas comunes que
encontrara para la creacion de objetos.

*/