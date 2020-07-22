/* Objetos y propiedades

Imaginemos que queremos acceder a un elmento de la lista pero no por su índice sino por un nombre específico.
Basicamente nombrando cada uno de los valores.
Con las listas no puedes hacer esto pero con los objetos si se puede hacer esto.

Entonces en objetos podemos definir pares de valores clave, lo que significa que cada valor tiene un nombre que se llama la clave
Entonces podemos usar objetos para agrupar diferentes variables que permanecen juntas y que no tienen un orden en particular.
Por ejemplo, las propiedades de John.

Por ende, una diferencia fundamental entre objetos y arrays es que en los arrays el orden importa mucho, mientras que en los objetos no importan en absoluto.
*/

//La forma mas facil de crear objetos es con el llamado literal que basicamente es como un contenedor que podemos llenar con variables que se llaman propiedades.
//Entonces el objeto literal lo escribimos asi: 
var john = {
    //clave: valor;
    nombre: 'John', //nombre es una propiedad del objeto john.
    apellido: 'Smith',
    añoNacim: 1998,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcEdad: function(añoNacim){
        return 2020 - añoNacim;
    }
};

console.log(john.nombre); //primera forma de obtener un elemento del objeto
console.log(john.['apellido']); //segunda forma de obtener un elemento del objeto
var x = 'añoNacim';
console.log(john.[x]); //tercera forma de obtener un elemento del objeto

//cambiar un valor del objeto
john.job = 'designer';
//tambien para esto podemos usar la notacion de brackets
john['isMarried'] = true;
console.log(john);

//Hay dos maneras diferentes de inicializar un nuevo objeto:
var jane = new Object();
jane.nombre = 'Jane';
jane.añoNacim = 1969;
jane['apellido'] = 'smith'; //Importante lo que va entre [] tiene que ir entre comillas.
console.log(jane);

//Podemos incluso adjuntar funciones a los objetos, llamadas metodos.
//para lo cual tomemos el objeto john y agreguemosle una funcion para calcular la edad de john,
//no queremos almacenar el resultado dentro del objeto porqeu cambia cada año
console.log(john.calcEdad(1990));

//Ahora podemos decir que los arrays son objetos porque esa es la unica forma de tener metodos 