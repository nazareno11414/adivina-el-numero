const pista = document.querySelector(".pista");
const numEscrito = document.querySelector(".form-adivinar");
const numero = document.querySelector("#numero");
const btnAdivinar = document.querySelector(".adivinar");
const btnReiniciar = document.querySelector(".reiniciar");
const intentos = document.querySelector(".intentos");
const botonesRango = document.querySelectorAll("[data-rango]");

let cont = 0;
let numeroRandom = 0;
let rango = 0;
function reiniciar() {
  cont = 0;
  rango = 0;
  numeroRandom = 0;

  pista.textContent = "Escribe el numero";
  intentos.textContent = "";
  numero.value = "";
  btnAdivinar.setAttribute("disabled", "");
  botonesRango.forEach((boton) => {
    boton.style.display = "";
    boton.removeAttribute("disabled");
  });
}

const randomNumber = (num) => {
  numeroRandom = Math.floor(Math.random() * num + 1);
};

botonesRango.forEach((boton) => {
  boton.addEventListener("click", () => {
    rango = Number(boton.dataset.rango);
    randomNumber(rango);
    botonesRango.forEach((otroBoton) => {
      if (boton !== otroBoton) {
        otroBoton.style.display = "none";
      }
    });
    boton.setAttribute("disabled", "");
    btnAdivinar.removeAttribute("disabled");
  });
});
numEscrito.addEventListener("submit", (e) => {
  e.preventDefault();

  if (numero.value === "") {
    return;
  }

  if (cont < 10) {
    cont++;

    intentos.textContent = cont;
    if (Number(numero.value) === numeroRandom) {
      pista.textContent = "Encontrado";
      btnAdivinar.setAttribute("disabled", "");
    } else {
      if (Number(numero.value) < numeroRandom) {
        pista.textContent = "Mas alto";
      } else {
        pista.textContent = "Mas bajo";
      }
    }
  }
  if (cont === 10) {
    pista.textContent = `Perdiste, El número era ${numeroRandom}`;
    btnAdivinar.setAttribute("disabled", "");
  }
});

btnReiniciar.addEventListener("click", reiniciar);
