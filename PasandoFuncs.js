/*FUNCIONES
Las funciones como ya dijimos, en javascript son funciones.
Por lo cual, no nos debe sorprender que con funciones podemos hacer las mismas coasas que con los objetos.
Entonces veamos algunos hechos sobre funciones:
    - Una funcion es una instancia del tipo Objeto.
    - Una funcon se comporta como cualquier otro objeto.
    - Podemos almacenar funciones en una variable.
    - Podemos pasar una funcion como un argumento de otra funcion.
    - Podemos retornar una funcion desde una funcion.

Y por todo esto, decimos que en JavaScript tenemos funciones de primera clase.

Veamos un ejemplo de pasar funciones como parametros de otras funciones.
*/

var años = [1990,1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}
//funciones simples que solo hacen una sola tarea y estas funciones se llamaran funciones de "devolución de llamada"
//porque son funciones que pasamos a funciones que luego las llamaremos. En este caso, nuestra funcion de devolucion
//de llamada, fn, se llamara aqui cuando deseemos insertar un nuevo elemento en nuestro array.

function calcularEdad(el){
    return 2016-el;
}