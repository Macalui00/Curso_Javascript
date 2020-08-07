/*CODING CHALLENGE 5

Recuerdas el calculador de propinas? Vamos a crear una version mas avanzada usando todo lo que aprendimos

Esta vez, John y su familia fue a 5 restaurantes diferentes. Las facturas eran $124, $48, $268, $180 y $42.

A john le gusta dejar propina del 20% de la factura cuando esta es menor a 50$, 15% cuando esta esta entre 50 y 200$, y 10% si la factura es mas que $200.

Implementar una calculadora de propinas usando objetos y loops:
1.Crear un objeto con un array con los valores de las facturas.
2.Agregar un metodo para calcular la propina.
3.Este metodo debe incluir un loop para iterar todas las facturas y hacer el calculo de propinas.
4.Como un output, crear 1) un nuevo array conteniendo todas las propinas y 2) un array conteniendo los montos tinales de pagos (fatura + propina).
HINT: empezar con dos arrays vacios [] como propiedades y despues llenarlos en el loop.

Extra despues de finalizar: La familia de Mark tambien fue de vacaciones y fue a 4 restaurantes diferentes.
Las facturas son: $77, $375, $110, $45.

A mark le gusta dejar 20% de la factura de propina cuando la factura es menor a 100$., 10% cuando la factura es entre 100$ y 300$ y 25% cuando la propina es mas de 300$

5. Implementar la misma funcionalidad que antes, esta vez usando las reglas de Mark
6. Crear una funcion (no un metodo) para calcular el promedio de la lista de propinas a dar.
HINT: loop alrededor del array, y en cada iteracion almacene la suma actual en una variable, empexando con 0. Despues que tenga la suma del array dividirlo por el numero de elementos que hay en el
7. calcular el promedio de propinas por cada familia.
8. mostrar por consola que familia pago el promedio de propinas mas alto.
*/

//Definicion de los dos objetos persona con sus atributos y metodos.

var persona1 = {
    nombre: '',
    facturas: [],
    propinas: [],

    //Calcular propinas almacena la propina para cada factura y la inserta en la lista propinas
    calcularPropinas : function(){
        for(var i = 0; i < this.facturas.length; i++){
            if (i < 50){
                this.propinas.push(calcularPorcentaje(this.facturas[i], 20));
                console.log("la propina de " + this.facturas[i] + " es de: " + this.propinas[i]);
            } else if (50 <= i <= 200) {
                this.propinas.push(calcularPorcentaje(this.facturas[i], 15));
                console.log("la propina de " + this.facturas[i] + " es de: " + this.propinas[i]);
            } else {
                this.propinas.push(calcularPorcentaje(this.facturas[i], 10));
                console.log("la propina de " + this.facturas[i] + " es de: " + this.propinas[i]);
            }
        }
    },

    montosTotales: [],

    //calcular el total factura+propina para cada factura y se almacena en la lista: montosTotales
    calcularMontosTotales : function(){
        for(var i = 0; i < this.facturas.length; i++){
            this.montosTotales.push(this.facturas[i]+this.propinas[i]);
            console.log("El monto total a pagar es de " + this.montosTotales[i]);
        }
    },
}

var persona2 = {
    nombre: '',
    facturas: [],
    propinas: [],

    //Calcular propinas almacena la propina para cada factura y la inserta en la lista propinas
    calcularPropinas : function(){
        for(var i = 0; i < this.facturas.length; i++){
            if (i < 100){
                this.propinas.push(calcularPorcentaje(this.facturas[i], 20));
                console.log("la propina de " + this.facturas[i] + " es de: " + this.propinas[i]);
            } else if (100 <= i <= 300) {
                this.propinas.push(calcularPorcentaje(this.facturas[i], 15));
                console.log("la propina de " + this.facturas[i] + " es de: " + this.propinas[i]);
            } else {
                this.propinas.push(calcularPorcentaje(this.facturas[i], 10));
                console.log("la propina de " + this.facturas[i] + " es de: " + this.propinas[i]);
            }
        }
    },

    montosTotales: [],

    //calcular el total factura+propina para cada factura y se almacena en la lista: montosTotales
    calcularMontosTotales : function(){
        for(var i = 0; i < this.facturas.length; i++){
            this.montosTotales.push(this.facturas[i]+this.propinas[i]);
            console.log("El monto total a pagar es de " + this.montosTotales[i]);
        }
    },
}

//Sumo cada uno de los elementos de una lista
var sumar = function(lista){
    var suma = 0;
    lista.forEach (function(numero){
        suma += numero;
    });
    return suma;
}

//calculo el promedio de propinas
var calcularPromedio = function(lista){
    return sumar(lista)/lista.length;
}

//Comparo el promedio de propinas de las dos familias.
var compararPromedios = function(prom1, nombre1, prom2, nombre2){
    if (prom1 > prom2) {
        console.log(nombre1 + " tiene un promedio de propinas más alto que: " + nombre2);
        console.log(nombre1 + " tiene un promedio de: " + prom1);
        console.log(nombre2 + " tiene un promedio de: " + prom2);
    } else if (prom1 < prom2){
        console.log(nombre2 + " tiene un promedio de propinas más alto que: " + nombre1);
        console.log(nombre2 + " tiene un promedio de: " + prom2);
        console.log(nombre1 + " tiene un promedio de: " + prom1);
    } else {
        console.log(nombre2 + " y " + nombre1 +" tiene un promedio de propinas igual: " + prom2);
    }
}

//me permite calcular cual será el monto de propina que la familia debe darle al mozo
var calcularPorcentaje = function(factura, n){
    return (factura*n/100);
}

persona1.nombre =  prompt('¿Ingrese el nombre de la persona?');

persona1.facturas.push(parseFloat(prompt('¿Ingrese importe de factura?')));
var cierto = prompt('¿Desea ingresar otra factura? S/N');
while (cierto !== 'S' && cierto !== 'N'){
    cierto = prompt('Dato erroneo. ¿Desea ingresar otra factura? S/N');
}

while (cierto === 'S') {
    persona1.facturas.push(parseFloat(prompt('¿Ingrese importe de factura?')));
    cierto = prompt('¿Desea ingresar otra factura? S/N');
    while (cierto !== 'S' && cierto !== 'N'){
        cierto = prompt('Dato erroneo. ¿Desea ingresar otra factura? S/N');
    }
}

persona1.calcularPropinas();
persona1.calcularMontosTotales();

cierto = prompt('¿Desea comparar con otra familia? S/N');
while (cierto !== 'S' && cierto !== 'N'){
    cierto = prompt('Dato erroneo. ¿Desea ingresar otra factura? S/N');
}

persona2.nombre =  prompt('¿Ingrese el nombre de la persona?');

persona2.facturas.push(parseFloat(prompt('¿Ingrese importe de factura?')));
var cierto = prompt('¿Desea ingresar otra factura? S/N');
while (cierto !== 'S' && cierto !== 'N'){
    cierto = prompt('Dato erroneo. ¿Desea ingresar otra factura? S/N');
}

while (cierto === 'S') {
    persona2.facturas.push(parseFloat(prompt('¿Ingrese importe de factura?')));
    cierto = prompt('¿Desea ingresar otra factura? S/N');
    while (cierto !== 'S' && cierto !== 'N'){
        cierto = prompt('Dato erroneo. ¿Desea ingresar otra factura? S/N');
    }
}

persona2.calcularPropinas();
persona2.calcularMontosTotales();

var promedio1 = calcularPromedio(persona1.propinas);
var promedio2 = calcularPromedio(persona2.propinas);
compararPromedios(promedio1, persona1.nombre, promedio2, persona2.nombre);

console.log('¡Gracias por usar el calculador de propinas!');