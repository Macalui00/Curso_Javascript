/* Loops e iteraciones
*/

//For loop
for(var i = 0; i <10; i++){
    console.log(i);
}

var John = ['John','Smith', 1990, 'teacher', false];

for(var i = 0; i < John.length; i++){
    console.log(John[i]);
}

//While loop
var i = 0;
while (i < John.length) {
    console.log(John[i]);
    i++;
}

//Continue y break
//Usamos el break para salir del loop
//Y el continue para salir de la iteracion actual e ir a la siguiente

for(var i = 0; i < John.length; i++){
    if (typeof John[i] !== 'string') continue;
    /*Línea anterior es equivalente a: 
        if (typeof John[i] /== 'string') {
            continue;}
    */
    console.log(John[i]);
}

//Ahora supongamos que quiero imprimir y contar algo que no sea una cadena:
for(var i = 0; i < John.length; i++){
    if (typeof John[i] !== 'string') break;
    /*Línea anterior es equivalente a: 
        if (typeof John[i] /== 'string') {
            break;}
    */
    console.log(John[i]);
}

//Imaginemos ahora que yo quiero recorrer el mismo array pero de manera inversa
for (var i = John.length -1; i >= 0; i--){
    console.log(John[i]);
}