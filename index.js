var numero1, numero2, i;
numero1 = parseInt(prompt("Digite o primeiro número: "));
numero2 = parseInt(prompt("Digite o segundo número: "));

if(numero1 > numero2){
    for(i = numero1; i <= numero2; i++){
        document.write(i + "<br>");
    }
}else{
    for(i = numero1; i <= numero2; i++){
        document.write(i + "<br>");
    }
}
// 1. Se ingresan las 4 notas de un alumno. Hallar y mostrar su promedio. Luego mediante un mensaje mostrar: Si el promedio es 19 o 20 --- “Excelente”
// Si el promedio es 16 o 17 o 18 --- “Bueno”
// Si el promedio es 13 o 14 o 15 --- “Regular”
// Cualquier otro promedio --- “Malo”

// 2. Se ingresan la cantidad de horas trabajadas, la categoría del empleado y la cantidad de años trabajando en la empresa.
// Hallar el sueldo del empleado que va de acuerdo con su categoría:
// A – S/ 60 la hora, B – S/ 50 la hora, C – S/ 40 la hora, cualquier otra categoría S/ 30 la hora.
// La empresa otorgará las utilidades dependiendo de la cantidad de años del trabajador en la empresa: Para 20 años o más --- 5 veces el sueldo,
// De 10 a 19 años en la empresa --- 4 veces el sueldo,
// Para los demás --- será 3 veces el sueldo.
// Hallar y mostrar todos los conceptos que recibirá el empleador en su boleta.