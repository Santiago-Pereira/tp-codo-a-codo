"use strict";
//selectores

const borrar = document.querySelector(".btn-borrar");
const resumen = document.querySelector(".btn-resumen");
const total = document.querySelector(".total-a");
const cantInput = document.querySelector(".cant-input");
const categoria = document.querySelector("#seleccion");
const estudiante = document.querySelector("#opt-1");
const trainee = document.querySelector("#opt-2");
const junior = document.querySelector("#opt-3");

//variables
const ticketValue = 200;
estudiante.value = ticketValue - ticketValue * 0.8;
trainee.value = ticketValue - ticketValue * 0.5;
junior.value = ticketValue - ticketValue * 0.15;
let uno = 0;

//functions
resumen.addEventListener("click", () => {
  categoria.addEventListener("change", () => {
    categoria.value;
  });

  cantInput.addEventListener("keypress", (e) => {
    e.key === "Enter" ? Number(cantInput.value) : e.preventDefault();
  });

  function p() {
    if (categoria.value == 40) {
      uno = 80;
    }
    if (categoria.value == 100) {
      uno = 50;
    }
    if (categoria.value == 170) {
      uno = 15;
    }
    return uno;
  }

  total.textContent = `$${
    categoria.value * cantInput.value
  }  (El descuento aplicado fue del: ${p()}%)`;
  resumen.disabled = true;
});

function reset() {
  total.textContent = 0;
  categoria.value = 0;
  cantInput.value = 0;
  resumen.disabled = false;
  uno = 0;
}

borrar.addEventListener("click", reset);

/* console.log(cat);
console.log(cantidad);
console.log(total); */
/* console.log(cantInput.value);
console.log(categoria.value); */
