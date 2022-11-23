let ronda = 1;
let playerW = 0;
let consolaW = 0;

let jugar = () => {
    let jugada = document.querySelector('input[name="ppt"]:checked').value;
    if (jugada != null) {
        switch (jugada) {
            case "PIEDRA":
                generarCombate(1);
                break;
            case "PAPEL":
                generarCombate(2);
                break;
            case "TIJERA":
                generarCombate(3);
                break;
        }
    } else {
        alert("Porfavor escoja una opcion")
    }
};

let generarJugadaIA = () => {
    let num = Math.random() * (3 - 1) + 1;
    num = Math.floor(num);
    return num;
};

let generarCombate = (num) => {
    let numIA = generarJugadaIA();
    switch (numIA) {
        case 1:
            if (num == 1) {
                generarRonda("PLAYER ✊ 🆚 ✊ COMPUTER");
            }
            else if (num == 2) {
                playerW++;
                generarRonda("PLAYER 🧻 🆚 ✊ COMPUTER");
            }
            else {

                consolaW++;
                generarRonda("PLAYER ✂ 🆚 ✊ COMPUTER");
            }
            break;
        case 2:
            if (num == 1) {
                consolaW++;
                generarRonda("PLAYER ✊ 🆚 🧻 COMPUTER");
            }
            else if (num == 2) {
                generarRonda("PLAYER 🧻 🆚 🧻 COMPUTER");
            }
            else {
                playerW++;
                generarRonda("PLAYER ✂ 🆚 🧻 COMPUTER");
            }
            break;
        case 3:
            if (num == 1) {
                playerW++;
                generarRonda("PLAYER ✊ 🆚 ✂ COMPUTER");
            }
            else if (num == 2) {
                consolaW++;
                generarRonda("PLAYER 🧻 🆚 ✂ COMPUTER");
            }
            else {
                generarRonda("PLAYER ✂ 🆚 ✂ COMPUTER");
            }
            break;
    }
}

let generarRonda = mensaje => {
    document.body.innerHTML += "<div><p class='ronda'>RONDA " + ronda + " FIGHT!!</p><p class='combate'>" + mensaje + "</p><p class='marcador'>PLAYER [ " + playerW + " ] || COMPUTER [ " + consolaW + " ]</p></div>";
    ronda++;
    if (ronda == 4) {
        if (playerW > consolaW) {
            document.body.innerHTML += "<div><p class='final'>GAME OVER PLAYER WINS!</p></div>";
        } 
        else if (consolaW > playerW) {
            document.body.innerHTML += "<div><p class='final'>GAME OVER COMPUTER WINS!</p></div>";
        } 
        else {
            document.body.innerHTML += "<div><p class='final'>GAME OVER ITS A DRAW!</p></div>";
        }
        let boton = document.getElementById("go");
        boton.setAttribute("value", "Volver a jugar");
        boton.setAttribute("onclick", "refresh();")
    }
}

let refresh = () => location.reload();
