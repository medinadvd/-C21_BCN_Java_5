//Javascript Ejercicio 6

//Pasamos 3 valores a la funcion y los sumamos
let suma = (pr, se, te) => pr + se + te;
console.log(suma(10,20,30));

//Pasamos nombre completo separado en tres valores y lo concatenamos
let printName = (nombre, ap1, ap2) => console.log("Nombre completo: "+ nombre +" "+ ap1 +" "+ ap2);
printName("David","Medina","Medina");

//Pasamos dos numeros y devolvemos el mayor valor
let mayor = (num1, num2) => Math.max(num1, num2);
console.log("El mayor número es: "+ mayor(5,2));