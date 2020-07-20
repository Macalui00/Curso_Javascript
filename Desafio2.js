/*
John y Mike juegan basket en equipos diferentes. En los ultimos 3 juegos, el equipo de John obtuvo una puntuación de 89,
120 y 103 puntos, mientras que el equipo de Mike recibio unas puntuaciones de: 116, 94, 123.

1. Calcular el promedio de puntaje para cada equipo
2. Decidir que equipo gana en promedio (Puntaje Promediado mas alto) y mostrar por consola el ganador.
Tambien incluir el puntaje promediado en la salida.
3. Despues cambiar los puntajes para mostrar diferentes ganadores.
No olvides de tener en cuenta de que puede haber un empate (Mismo puntaje promedio)

4. EXTRA: Maria tambien juega basket y su equipo obtuvo 97, 134 y 105 puntos. Como antes, mostrar por consola el ganador. PISTA:
vas a necesitar el operador && para tomar la decision. si no podes resolver este, solo mira la resolución, no hay problema.
5. Como antes, cambiar los puntajes para generar diferentes ganadores, manteniendo en mente que puede haber empates.
*/

function compararPuntajes(Num1,Nombre1, Num2, Nombre2){
    switch (true) {
        case (Num1 > Num2):
            console.log("El ganador es: " + Nombre1 +" con un puntaje de: " + Num1);
            break;
        case (Num1 < Num2):
            console.log("El ganador es: " + Nombre2 +" con un puntaje de: " + Num2);
            break;
        default:
            console.log("¡Hubo un empate!");
    }
}

function comparar3Puntajes(Num1,Nombre1, Num2, Nombre2, Num3, Nombre3){

    switch (true) {
        case (Num1 > Num2 && Num1 > Num3):
            console.log("El ganador es: " + Nombre1 +" con un puntaje de: " + Num1);
            break;
        case (Num2 > Num1 && Num2 > Num3):
            console.log("El ganador es: " + Nombre2 +" con un puntaje de: " + Num2);
            break;
        case (Num3 > Num1 && Num3 > Num2):
            console.log("El ganador es: " + Nombre3 +" con un puntaje de: " + Num3);
            break;
        default:
            console.log("¡Hubo un empate!");
    }
}
/*
var PM1, PM2, PM3, PJ1, PJ2, PJ3, PMary1, PMary2, PMary3, PromedioMark, PromedioJohn, PromedioMary;
var cierto = prompt('Desea determinar el ganador? S/N');
while (cierto !== 'S' && cierto !== 'N'){
    cierto = prompt('Dato erroneo. ¿Desea determinar el ganador? S/N');
}
if (cierto === 'S'){
    PM1 = parseInt(prompt('¿Cuál es el primer puntaje de Mark?'),10);
    PM2 = parseInt(prompt('¿Cuál es el segundo puntaje de Mark?'),10);
    PM3 = parseInt(prompt('¿Cuál es el tercer puntaje de Mark?'),10);

    PJ1 = parseInt(prompt('¿Cuál es el primer puntaje de John?'),10);
    PJ2 = parseInt(prompt('¿Cuál es el segundo puntaje de John?'),10);
    PJ3 = parseInt(prompt('¿Cuál es el tercer puntaje de John?'),10);

    PromedioMark = (PM1 + PM2 + PM3) / 3
    console.log("Promedio de Mark es: " + PromedioMark);
    PromedioJohn = (PJ1 + PJ2 + PJ3) / 3
    console.log("Promedio de John es: " + PromedioJohn);

    compararPuntajes(PromedioMark, "Mark", PromedioJohn, "John");
    console.log("Ahora invertiremos los puntajes para obtener diferentes ganadores");
    compararPuntajes(PromedioJohn, "Mark", PromedioMark, "John");

    cierto = prompt('Desea sumar a Mary? S/N');
    while (cierto !== 'S' && cierto !== 'N'){
        cierto = prompt('Dato erroneo. ¿Desea sumar a Mary? S/N');
    }
    if(cierto === 'S'){
        PMary1 = parseInt(prompt('¿Cuál es el primer puntaje de Mary?'),10);
        PMary2 = parseInt(prompt('¿Cuál es el segundo puntaje de Mary?'),10);
        PMary3 = parseInt(prompt('¿Cuál es el tercer puntaje de Mary?'),10);

        PromedioMary = (PMary1 + PMary2 + PMary3) / 3;
        console.log("Promedio de Mary es: " + PromedioMary);
        
        comparar3Puntajes(PromedioJohn, "John", PromedioMark, "Mark", PromedioMary, "Mary");
        console.log("Ahora invertiremos los puntajes para obtener diferentes ganadores");
        comparar3Puntajes(PromedioJohn, "Mark", PromedioMary, "John", PromedioMark, "Mary");

    }
    
} else if (cierto === 'N'){
    console.log("Dijo que no. FIN")
}
*/

//OTRA VERSION PERO CON LISTAS, PROBAAAAR!
function sumar(lista){
    var suma = 0;
    lista.forEach (function(numero){
        suma += numero;
    });
    console.log(suma);
    return suma;
}

function calcularProm(lista){
    var prom = 0;
    prom = (sumar(lista))/(lista.length);
    console.log(prom);
    return prom;
}

var P1, P2, P3;
var listaEq1 = [], listaEq2 = [], listaEq3 = [], Nombre1,Nombre2, Nombre3, Promedio1, Promedio2, Promedio3;
var cierto = prompt('Desea determinar el ganador? S/N');
if (cierto === 'S'){

    Nombre1 = prompt('Nombre Primer Jugador');
    P1 = parseInt(prompt('¿Cuál es el primer puntaje del equipo?'),10);
    listaEq1.push(P1);

    cierto = prompt('Desea ingresar otro puntaje? S/N');
    while (cierto !== 'S' && cierto !== 'N'){
        cierto = prompt('Dato erroneo. ¿Desea ingresar otro puntaje? S/N');
    }
    if (cierto === 'S') {
        while (cierto === 'S'){
            P1 = parseInt(prompt('¿Cuál es el siguiente puntaje del equipo?'),10);
            listaEq1.push(P1);
            cierto = prompt('¿Desea ingresar otro puntaje? S/N');
        }
    }

    Nombre2 = prompt('Nombre Segundo Jugador');
    P2 = parseInt(prompt('¿Cuál es el primer puntaje del equipo?'),10);
    listaEq2.push(P2);

    cierto = prompt('Desea ingresar otro puntaje? S/N');
    while (cierto !== 'S' && cierto !== 'N'){
        cierto = prompt('Dato erroneo. ¿Desea ingresar otro puntaje? S/N');
    }
    if (cierto === 'S') {
        while (cierto === 'S'){
            P2 = parseInt(prompt('¿Cuál es el siguiente puntaje del equipo?'),10);
            listaEq2.push(P2);
            cierto = prompt('¿Desea ingresar otro puntaje? S/N');
        }
    }

    Promedio1 = calcularProm(listaEq1)
    Promedio2 = calcularProm(listaEq2)

    compararPuntajes(Promedio1, Nombre1, Promedio2, Nombre2);
    console.log("Ahora invertiremos los puntajes para obtener diferentes ganadores");
    compararPuntajes(Promedio2, Nombre1, Promedio1, Nombre2);

    cierto = prompt('Desea sumar a un tercer jugador? S/N');
    while (cierto !== 'S' && cierto !== 'N'){
        cierto = prompt('Dato erroneo. ¿Desea sumar a un tercer jugador? S/N');
    }
    if (cierto === 'S') {
        while (cierto === 'S'){
            P3 = parseInt(prompt('¿Cuál es el siguiente puntaje del equipo?'),10);
            listaEq3.push(P3);
            cierto = prompt('¿Desea ingresar otro puntaje? S/N');
        }
    }
    
    Promedio3 = calcularProm(listaEq3)

    comparar3Puntajes(PromedioJohn, Nombre1, PromedioMark, Nombre2, PromedioMary, Nombre3);
    console.log("Ahora invertiremos los puntajes para obtener diferentes ganadores");
    comparar3Puntajes(PromedioJohn, Nombre2, PromedioMary, Nombre1, PromedioMark, Nombre3);
    
} else if (cierto === 'N'){
    console.log("Dijo que no")
}