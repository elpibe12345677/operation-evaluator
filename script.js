const path = window.location.pathname;
const operacion = decodeURIComponent(path.slice(1));

let resultado;
try {
  resultado = eval(operacion);
} catch (e) {
  resultado = "Error en la operación";
}

document.getElementById("resultado").textContent = resultado;
