/*1. A partir de la pizza sustituΓ­as
todos los elemento del array por
cervezas:ππ―π£πππ±πππ₯©
*/
let cad1 = ["π","π―","π£","π","π","π±","π","π","π₯©"];
console.log(cad1);
let posicion = cad1.findIndex(element => element == "π");
cad1.forEach(element = (value, index) => {
    if(index==posicion){
        cad1[index] = "π";
        posicion ++;
    }
});
console.log(cad1);

console.log("\n");

/*2. Encontrar si existe un elemento en el array que sea una piΓ±a.
πππππ
*/
let cad2 = ["π", "π", "π", "π", "π"];
let findEmoji = emoji =>{
    if(cad2.find(element => element==emoji)){
        return "PiΓ±a encontrada!";
    }
    else{
        return "PiΓ±a no encontrada :(";
    }
}

console.log(encontrado=findEmoji("π"));

console.log("\n");

/*3. Quita la piΓ±a del siguiente array.
πππππ
*/
let cad3 = ["π", "π", "π", "π", "π"];
console.log(cad3);
let pos = cad3.findIndex(element => element == "π");
cad3.splice(pos, 1);
console.log(cad3);

console.log("\n");

/*4. A partir del siguiente array πππππ
convierte todas las fresas en π
*/
let cad4 = ["π", "π", "π", "π", "π"];
console.log(cad4);
cad4.forEach(element = (value,index)=>{
    if(cad4[index]=="π"){
        cad4[index]="π";
    }
});
console.log(cad4);

console.log("\n");

/*5. AΓ±ade el siguiente icono π₯΅ inmediatamente despuΓ©s del cada
πΆοΈ en el siguiente array:
πΆοΈπ₯πΆοΈπ₯πΆοΈπ₯
*/
let cad5 = ["πΆοΈ", "π₯", "πΆοΈ", "π₯", "πΆοΈ", "π₯"];
let newCad5 = [];
cad5.map((item) =>{
    item=="πΆοΈ"?newCad5.push("πΆοΈ", "π₯΅"):newCad5.push(item);
});
console.log(cad5);
console.log(newCad5);

console.log("\n");

/*6. AΓ±ade una π cartas comodΓ­n entre medio de dos cartas . Por
ejemplo:π΄ππ΄ En el siguiente array:
π΄π΄π΄ππ΄π΄π΄
*/
let cad6 = ["π΄", "π΄", "π΄", "π", "π΄", "π΄", "π΄"];
let newCad6 = [];
cad6.map((item, index) =>{
    item==="π΄"&&cad6[index+1]==="π΄"?newCad6.push("π΄", "π"):newCad6.push(item);
});
console.log(cad6);
console.log(newCad6);
