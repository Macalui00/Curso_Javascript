/*Primitivos VS Objetos
Entonces sabemos que solo:
 - Numeros
 - Cadenas
 - Booleanos
 - Indefinidos
 - Null

 Son primitivos.
Y todo lo demás, son objetos.

Ahora ya sabemos muchas diferencias entre los dos, así que ahora vamos a compararlos aún más.

Una gran diferencia entre ambos es que las variables que contienen las primitivas, en realidad,
mantienen esos datos dentro de la variable misma.
En objetos es muy diferente. Variables asociadas con ojetos, en realidad, no contienen objetos,
sino que contienen una referencia al lugar en la memoria en donde se encuentra el objeto, donde
el objeto se almacena.

Entonces de nuevo, la variable declarada como un objeto, no tiene una copia real del objeto,
solo apunta a ese objeto. Asi que, veamos esto en practica. Y comencemos con los primitivos:

*/

var a = 23;
var b = a; //entonces b será igual a 23.

//ahora voy a mutar a
a = 46;
console.log(a); //46
console.log(b); //23

//esto demuestra que cada una de las variables tiene su propia copia de los datos.
//NO HACEN REFERENCIA A NADA.

//Ahora hagamos algo muy similar con objetos esta vez.
var obj1 = {
    nombre: 'John',
    edad: 26
}

var obj2 = obj1;

//ahora muto edad
obj1.edad = 30;
console.log(obj1.edad); //30
console.log(obj2.edad); //30

//los dos tienen 30. Cuando decimos que obj2 es igual a obj1, no estamos creando
//un nuevo objeto, sino que creamos una nueva referencia que apunta hacia el mismo objeto.

/*En funciones funciona exactamente de la misma manera.
Veamos que pasa cuando pasamos un primitivo y un objeto a una funcion.
*/

//funciones
var edad = 27;
var obj = {
    nombre: 'Macarena',
    ciudad: 'Capital Federal'
}

function cambiar(a, b){
    a = 30;
    b.ciudad = 'Arrecifes';
}

cambiar(edad, obj);

console.log(edad); //27, osea que tenemos lo mismo que antes.
console.log(obj.ciudad); //Arrecifes, esto si cambio.
/*

Esto muestra que cuando pasamos un primitivo a la funcion una copia simple es creada
por lo que podemos cambiar a tanto como queramos, nunca afectará la variable en el exterior.
Esto porque es una Primitiva. Pero cuando pasamos el objeto, no es realmente el objeto que
pasamos, sino la refencia al objeto.
Entonces de nuevo, cuando pasamos un objeto como parametro en una funcion, no pasamos el
objeto en si sino solo la referencia que apunta al objeto.
Entonce, cuando cambiamos el objeto dentro de la función, aún se refleja fuera de la funcion.

 */