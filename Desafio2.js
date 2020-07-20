/*
John y Mike juegan basket en equipos diferentes. En los ultimos 3 juegos, el equipo de John obtuvo una puntuación de 89,
120 y 103 puntos, mientras que el equipo de Mike recibio unas puntuaciones de: 116, 94, 123.

1. Calcular el promedio de puntaje para cada equipo
2. Decidir que equipo gana en promedio (Puntaje Promediado mas alto) y mostrar por consola el ganador.
Tambien incluir el puntaje promediado en la salida.
3. Despues cambiar los puntajes para mostrar diferentes ganadores.
No olvides de tener en cuenta de que puede haber un empate (Mismo puntaje promedio)

4. EXTRA: Maria tambien juega basket y su equipo obtuvo 97,134 y 105 puntos. Como antes, mostrar por consola el ganador. PISTA:
vas a necesitar el operador && para tomar la decision. si no podes resolver este, solo mira la resolución, no hay problema.
5. Como antes, cambiar los puntajes para generar diferentes ganadores, manteniendo en mente que puede haber empates.
*/
var PM1, PM2, PM3, PJ1, PJ2, PJ3, PMary1, PMary2, PMary3, PromedioMark, PromedioJohn, PromedioMary;
var cierto = prompt('Desea determinar el ganador? S/N');
if (cierto === 'S'){
    PM1 = prompt('¿Cuál es el primer puntaje de Mark?');
    PM2 = prompt('¿Cuál es el segundo puntaje de Mark?');
    PM3 = prompt('¿Cuál es el tercer puntaje de Mark?');

    PJ1 = prompt('¿Cuál es el primer puntaje de John?');
    PJ2 = prompt('¿Cuál es el segundo puntaje de John?');
    PJ3 = prompt('¿Cuál es el tercer puntaje de John?');

    PromedioMark = (PM1 + PM2 + PM3) / 3
    PromedioJohn = (PJ1 + PJ2 + PJ3) / 3

    //Podría hacer una funcion comparar.
    //Podria ser una lista de puntajes...
    
} else if (cierto === 'N'){
    console.log("Dijo que no")
}

