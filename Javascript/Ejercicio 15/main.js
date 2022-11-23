let listaEmoji = [];

//let actualizarLista = () => document.getElementById("lista").innerText=listaEmoji;
let actualizarLista = () =>{
    document.getElementById("lista").innerHTML = ("["+ listaEmoji +"]");
    document.getElementById("insertNum").setAttribute('max',listaEmoji.length-1);
    document.getElementById("deleteNum").setAttribute('max',listaEmoji.length-1);
}
//Generamos un numero aleatorio dentro del rango del codigo de emojis
let generarEmoji = () => {
    let num = Math.random() * (	128567 - 128512) + 128512;
    num = Math.floor(num);
    return ("&#" + num);
};

//--------------------------AÑADIR ELEMENTOS-------------------------------

//Añadimos el elemento al final de la lista
let pushEmoji = () =>{
    listaEmoji.push(generarEmoji());
    actualizarLista();
} 

//Añadimos el elemento al inicio de la lista
let unshiftEmoji = () => {
    listaEmoji.unshift(generarEmoji());
    actualizarLista();
}
//Añadimos el elemento en la posicion adquirida
let insertAtEmoji = () => {
    let posicion = document.getElementById("insertNum").value;
    if(posicion.length==0){
        alert("Introduce la posición en la que insertar");
    }else{
        listaEmoji.splice(posicion, 0, generarEmoji());
        actualizarLista();
    }
};

//--------------------------ELIMINAR ELEMENTOS-------------------------------

//Elimina el ultimo elemento de la lista
let popEmoji = () =>{
     listaEmoji.pop();
     actualizarLista();
}

//Elimina el elemento al inicio de la lista
let shiftEmoji = () =>{
     listaEmoji.shift();
     actualizarLista();
}

//Eliminamos el elemento en la posicion adquirida
let removeAtEmoji = () => {
    let posicion = document.getElementById("deleteNum").value;
    if(posicion.length==0){
        alert("Introduce la posición en la que eliminar");
    }else{
        listaEmoji.splice(posicion,1);
        actualizarLista();
    }

}
