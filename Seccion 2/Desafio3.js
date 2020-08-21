/* DESAFIO 3:
John y su familia fueron de vacaciones y fueron a 3 diferentes restaurantes.
Y los recibos fueron $124, $48 y $268.

Para darle propinas al mozo, John creo una simple calculadora de propinas (como una funcion).
A el le gusta dar propinas del 20% de la factura cuando la factura es menor a $50,
15% cuando la factura esta entre 50$ y 200$ y 10% cuando la factura es mas que 200$.

*/

var sumar = function(lista){
    var suma = 0;
    lista.forEach (function(numero){
        suma += numero;
    });
    return suma;
}

var calcularPorcentaje = function(suma, n){
    return (suma * n)/100;
}

var calcularPropina = function(factura){
    if (factura < 50){
        return calcularPorcentaje(factura, 20);
    } else if (50 <= factura <= 200) {
        return calcularPorcentaje(factura, 15);
    } else {
        return calcularPorcentaje(factura, 10);
    }
}

var factura =  parseInt(prompt('¿Ingrese importe de factura?'),10);
console.log("La propina para la factura ingresada es de: " + calcularPropina(factura));

var cierto = prompt('¿Desea ingresar otra factura? S/N');
while (cierto !== 'S' && cierto !== 'N'){
    cierto = prompt('Dato erroneo. ¿Desea ingresar otra factura? S/N');
}
while (cierto === 'S') {
    factura =  parseInt(prompt('¿Ingrese importe de factura?'),10);
    console.log("La propina para la factura ingresada es de: " + calcularPropina(factura));
    cierto = prompt('¿Desea ingresar otra factura? S/N');
    while (cierto !== 'S' && cierto !== 'N'){
        cierto = prompt('Dato erroneo. ¿Desea ingresar otra factura? S/N');
    }
}

console.log('¡Gracias por usar el calculador de propinas!');