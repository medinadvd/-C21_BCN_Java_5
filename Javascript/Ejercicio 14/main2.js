let oldArray = ["🌶️", "🥛", "🌶️", "🥛", "🌶️", "🥛"];
let newArray = [];
// console.log(oldArray);
oldArray.map((item, index) =>{
    item=="🌶️"?newArray.push("🌶️", "🥵"):newArray.push(item);
});
console.log(oldArray);
console.log(newArray);