/* Funciones retornando funciones */

function interviewQuestion(job) {
    if (job === 'diseñador'){
        return function(name){ //esta funcion que se retorna es una función anonima.
            console.log(name + ', puedes explicarnos cual fue tu experiencia diseñando?');
        }
    } else if (job === 'profesor') {
        return function (name) {
            console.log('Que materia enseñas, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hola, ' + name + ' , a que te dedicas?');
        }
    }
}

//esta funcion interviewQuestion que creamos no devolvera un valor simple como solemos hacer con las funciones
//por lo tanto, en su lugar, devuelve una funcion completa que luego podemos utilizar, y esto es posible porque
//las funciones son de primera clase, porqeu son efectivamente objetos. Entonces, lo que en realidad devuelven
//son objetos.

//Recordemos que esto es una funcion que retorna una funcion y tenemos que almacenar el resultado en alguna variable:
var teacherQuestion = interviewQuestion('teacher');
//en teacherQuestion se almacena la segunda funcion, por eso ahora llamo a esa segunda funcion de la siguiente manera:
teacherQuestion('John');


var designerQuestion = interviewQuestion('designer');
designerQuestion('John');

//me permite hacer funciones mas especificas  a partir de funciones mas generales.

//Todas estas llamadas a la funcion las podríamos haber hecho de una manera diferente, sin tener que almacenar la segunda funcion en una variable.
interviewQuestion('teacher') ('Mark');