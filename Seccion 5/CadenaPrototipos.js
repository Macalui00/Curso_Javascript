/* Cadena de prototipos en consola:

Vamos a ver como podemos inspeccionar los objetos que creamos el otro día a traves de la consola.
Porque la consola no es solo para registrar algunas cosas, como hemos estado haciendo, sino que
podemos hacer tambien cosas más poderosas como inspeccionar objetos.

Solamente tenemos que escribir el nombre de nuestro objeto por consola, como por ejemplo:
john
y nos devolvera que es un objeto persona con el valor de sus propiedades.
Pero si encima cliqueamos en la flecha que nos aparece a la izquierda del objeto persona podemos 
ver mucha mas información adicional.
Podemos ver las propiedades y luego vemos algo llamado _proto_: Object (que tiene una flechita
tambien). Y es, de hecho, el prototipo del objeto john. Y ahi tenemos la funcion edadCalculada

ahora veamos un poco de Persona.prototype.
john._proto_ === Persona._prototype
true

se puede ver la cadena de protipos por consola.
 */