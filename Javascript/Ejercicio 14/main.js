/*1. A partir de la pizza sustituías
todos los elemento del array por
cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥩
*/
let cad1 = ["🍔","🌯","🍣","🍕","🍜","🍱","🍙","🍘","🥩"];
console.log(cad1);
let posicion = cad1.findIndex(element => element == "🍕");
cad1.forEach(element = (value, index) => {
    if(index==posicion){
        cad1[index] = "🍕";
        posicion ++;
    }
});
console.log(cad1);

console.log("\n");

/*2. Encontrar si existe un elemento en el array que sea una piña.
🍕🍕🍍🍕🍕
*/
let cad2 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
let findEmoji = emoji =>{
    if(cad2.find(element => element==emoji)){
        return "Piña encontrada!";
    }
    else{
        return "Piña no encontrada :(";
    }
}

console.log(encontrado=findEmoji("🍍"));

console.log("\n");

/*3. Quita la piña del siguiente array.
🍕🍕🍍🍕🍕
*/
let cad3 = ["🍕", "🍕", "🍍", "🍕", "🍕"];
console.log(cad3);
let pos = cad3.findIndex(element => element == "🍍");
cad3.splice(pos, 1);
console.log(cad3);

console.log("\n");

/*4. A partir del siguiente array 🍓🍋🍓🍋🍓
convierte todas las fresas en 🍄
*/
let cad4 = ["🍓", "🍋", "🍓", "🍋", "🍓"];
console.log(cad4);
cad4.forEach(element = (value,index)=>{
    if(cad4[index]=="🍓"){
        cad4[index]="🍄";
    }
});
console.log(cad4);

console.log("\n");

/*5. Añade el siguiente icono 🥵 inmediatamente después del cada
🌶️ en el siguiente array:
🌶️🥛🌶️🥛🌶️🥛
*/
let cad5 = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
let newCad5 = [];
cad5.map((item) =>{
    item=="🌶️"?newCad5.push("🌶️", "🥵"):newCad5.push(item);
});
console.log(cad5);
console.log(newCad5);

console.log("\n");

/*6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por
ejemplo:🎴🃏🎴 En el siguiente array:
🎴🎴🎴🃏🎴🎴🎴
*/
let cad6 = ["🎴", "🎴", "🎴", "🃏", "🎴", "🎴", "🎴"];
let newCad6 = [];
cad6.map((item, index) =>{
    item==="🎴"&&cad6[index+1]==="🎴"?newCad6.push("🎴", "🃏"):newCad6.push(item);
});
console.log(cad6);
console.log(newCad6);
