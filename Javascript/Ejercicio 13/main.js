let numero = 1;
let i = 0;
do{
    if(num === 0){
        i++;
        numero--;
        console.log(numero);
    }
    else{
        numero++;
        console.log(numero);
    }
}while(numero<5);

//El programa genera un bucle mediante "do while" utilizando dos variables, dando un total de 6 interacciones.
//En el if entra si "i" coincide en valor y tipo con el numero 0, en caso contrario entra en el else.