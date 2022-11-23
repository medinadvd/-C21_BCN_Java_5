import { Quiz } from "./quiz.js";

const quest = document.getElementById("quest");
let q1, q2, q3, activo, num = 0;

//Generamos datos
const loadData = () => {
    let p1 = "¿Que lenguaje no es orientado a Objetos?";
    let p2 = "¿Cual de las siguientes opciones no es un editor de código?";
    q1 = new Quiz(p1, "Java", "Haskell", "C++", "Python", "Haskell");
    q2 = new Quiz(p2, "vim", "vscode", "emacs", "word", "word");
}

let cargarQuiz = () => {
    console.log("PRIMER STEP");

    num++
    switch (num) {
        case 1:
            activo = q1;
            generarQuiz(q1);
            break;
        case 2:
            activo = q2;
            generarQuiz(q2);
            break;
        case 3:
            alert("Estamos en ello");
            break;
    }
}

let compararRespuesta = (respuesta, id) =>{
    if(respuesta == activo.Cor){
        document.getElementById(id).style.backgroundColor = "green";
        alert("Respuesta correcta!!");
    }else{
        document.getElementById(id).style.backgroundColor = "red";
        alert("Respuesta errónea... La respuesta correcta es:")
    }
}

let checkRespuesta = (id) => {
    let boton = document.getElementById(id);
    switch (id) {
        case "bt1":
            compararRespuesta(activo.R1, id);
            break;
        case "bt2":
            compararRespuesta(activo.R2, id);
            break;
        case "bt3":
            compararRespuesta(activo.R3, id);
            break;
        case "bt4":
            compararRespuesta(activo.R4, id);
            break;
    }
    //boton.setAttribute()
}

let generarQuiz = (question) => {
    quest.innerHTML = "<p>" + question.Pregunta + "</p><input type=button class='boton' id='bt1' value='" + question.R1 + "'></input><input type=button class='boton' id='bt2' value='" + question.R2 + "'></input><input type=button class='boton' id='bt3' value='" + question.R3 + "'></input><input type=button class='boton' id='bt4' value='" + question.R4 + "'></input>";
    let botones = document.getElementsByClassName("boton");
    for (var i = 0 ; i < botones.length; i++) {
        botones[i].addEventListener("click", function(){checkRespuesta(this.id)}); 
    }
}

loadData();
cargarQuiz();
console.log(q1);
console.log(q2.Pregunta);



