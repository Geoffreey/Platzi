//DECLARACION DE FUNCNION ALEATORIA
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//REFACTOR DEL CODIGO USANDO FUNCNIONES
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🥌";
  } else if (jugada == 2) {
    resultado = "Papel 📄";
  } else if (jugada == 3) {
    resultado = "Tijera ✂";
  } else {
    resultado = "MAL ELEGIDO";
  }
  return resultado;
}
//1 es piedra, 2 es papel, 3 es tijera
let jugador = 0;
let min = 1;
let max = 3;
let pc = 0;
let perdidas = 0;
let triunfos = 0;

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3); //LLAMAR FUNCNIO ALEATORIA
  jugador = prompt("Elige: 1 para piedra, 2 para papel y 3 para tijera");

  //alert("elegiste" + jugador)
  alert("PC elige:" + eleccion(pc));
  alert("Tu eliges:" + eleccion(jugador));
  /*if (jugador == 1) {
      alert("Elegiste 🥌");
    } else if (jugador == 2) {
      alert("Elegiste 📃");
    } else if (jugador == 3) {
      alert("Elegiste ✂");
    } else {
      alert("Elegiste PERDER");
    }

    if (pc == 1) {
      alert("pc elige 🥌");
    } else if (pc == 2) {
      alert("pc elige 📃");
    } else if (pc == 3) {
      alert("pc elige ✂");
    } else {
      alert("pc elige PERDER");
    }*/

  //COMBATE
  if (pc == jugador) {
    alert("EMPATE 😮");
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE 🎉");
    triunfos = triunfos + 1;
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE 🎉");
    triunfos = triunfos + 1;
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE 🎉");
    triunfos = triunfos + 1;
  } else {
    alert("PERDISTE ❌");
    perdidas = perdidas + 1;
  }
}

alert("GANASTE" + triunfos + "veces. PERDISTE" + perdidas + "veces");
