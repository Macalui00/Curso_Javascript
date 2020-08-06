/* AHORA VAMOS A HABLAR DE OTRA MANERA DE CREAR OBJETOS QUE HEREDAN DE UN PROTOTIPO, y ese es
object.createMethod
Con esto, las cosas funcionan un poco diferente. Primero, definimos un objeto que actuará como
un prototipo y luego creamos un nuevo objeto basado en ese mismo prototipo.
Entonces, hagamos esto ahora.

Primero, tenemos que escribir el prototipo como un objeto simple.
*/
//Podemos notar que ya no usamos la mayuscula al principio, porque no es un constructor de funciones.
var personaProto = { //lo que quiero en un prototipo, como antes, es calcular el metodo de edad
    calcularEdad: function()  

}