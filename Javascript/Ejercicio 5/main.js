//Javascript Ejercicio 5

//Utilizamos math random para generar 0 o 1 aleatoriamente y mostramos por pantalla el resultado

let moneda = valor =>{
    if(valor == '0'){
        console.log("Ha salido cara!");
    }
    else{
        console.log("Ha salido cruz!");
    }
}

console.log(Math.round(Math.random()))
moneda(Math.round(Math.random()));