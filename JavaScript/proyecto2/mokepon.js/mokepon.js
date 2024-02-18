function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");

  if (inputHipodoge.checked) {
    alert("SELECCIONASTE A HIPODOGE");
  } else if (inputCapipepo.checked) {
    alert("SELECCIONASTE A CAPIPEPO");
  } else if (inputRatigueya.checked) {
    alert("SELECCIONASTE A RATIGUEYA");
  } else {
    alert("SELECCIONA UNA MASCOTA");
  }
}

window.addEventListener("load", iniciarJuego);
