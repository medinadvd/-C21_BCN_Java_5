//Javascript Ejercicio 10

//Sustituimos las "a" de un string por "o"
let frase = "Habia una valla muy alta";
let nuevo = frase.replaceAll('a', 'o');
console.log(frase);
console.log(nuevo);

//Detectar si una frase comienza con aca
let detector = palabra => {
    if(palabra.startsWith("aca") || palabra.startsWith("Aca")){
        console.log("La palabra "+ palabra +" comienza por 'aca' ");
    }
    else{
        console.log("La palabra "+ palabra +" no comienza por 'aca' ")
    }
}

detector("Academia");
detector("Escuela");