/* Desafio 4

Vamos a recordar el primer desafio de codeo cuando mark y john comparaban sus indices de masa corporal.
Ahora vamos a implementar la misma funcionalidad con objetos y metodos. 
1. Por cada uno de ellos, crear un objeto con propiedades para sus nombres completos, masa y altura.
2. Despues, agregar un metodo para cada objeto para calcular el indice de masa corporal. Salvar el indice
en el objeto y tambien retornarlo desde el metodo.
3. Al final, mostrarlo por consola quien tiene el indice mas alto, junto con sus nombres y sus respectivos
indices de masa corporal. NO OLVIDAR que pueden tener el mismo indice de masa corporal.

RECORDAR: BMI = masa / altura^2 = masa / (altura * altura). 
Masa en KG y Altura en Metros.

*/
function compararBMI(BMI1, nombre1, BMI2, nombre2){
    if (BMI1 > BMI2) {
        console.log(nombre1 + "presenta un indice de masa corporal mayor, que es de: " + BMI1);
    } else if (BMI1 === BMI2) {
        console.log(nombre1 + " y " + nombre2 + "presentan un mismo indice de masa corporal, que es de: " + BMI1);
    } else {
        console.log(nombre2 + "presenta un indice de masa corporal mayor, que es de: " + BMI2);
    }
}

var pers1 = {
    nombre: '', 
    apellido: '',
    peso = 0,
    altura = 0,
    calcBMI: function(){
        this.BMI = this.peso / (this.altura*this.altura) ; 
    }
};
pers1.nombre = prompt('¿Cual es el nombre de la primera persona?');
pers1.apellido = prompt('¿Cual es el apellido de ' + pers1.nombre + '?');
pers1.peso = parseFloat(prompt('¿Cual es su peso en Kg?'));
pers1.altura = parseFloat(prompt('¿Cual es su altura en metros?'));

var pers2 = {
    nombre: '', 
    apellido: '',
    peso = 0,
    altura = 0,
    calcBMI: function(){
        this.BMI = this.peso / (this.altura*this.altura) ; 
    }
};
pers2.nombre = prompt('¿Cual es el nombre de la primera persona?');
pers2.apellido = prompt('¿Cual es el apellido de ' + pers2.nombre + '?');
pers2.peso = parseFloat(prompt('¿Cual es su peso en Kg?'));
pers2.altura = parseFloat(prompt('¿Cual es su altura en metros?'));

pers1.calcBMI();
pers2.calcBMI();

console.log(pers1.BMI, pers2.BMI);
compararBMI(pers1.BMI, pers1.nombre, pers2.BMI, pers2.nombre);
