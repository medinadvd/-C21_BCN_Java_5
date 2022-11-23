//Javascript Ejercicio 4

//Generamos funcion de flecha que devuelva nombre y apellido
let printName = (nombre, apellido) => {
    nombre = "David";
    apellido = "Medina";
    return (nombre +" "+ apellido)
}

console.log(printName());

//Pasamos valor a la funcion y lo imprimimos desde la misma
let printBool = valor => console.log(valor);

printBool(false);

//Funcion con forEach parametros infinitos
let bucle = (...params) =>{
    params.forEach(item => console.log(item));
}

bucle(1,2,3,4,5);