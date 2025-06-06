const base = "/operation-evaluator/";
let path = window.location.pathname;

if (path.startsWith(base)) {
  path = path.slice(base.length);
} else {
  path = path.slice(1);
}

const operacion = decodeURIComponent(path);

let resultado = "No se encontró ninguna operación";

if (operacion) {
  try {
    resultado = eval(operacion);
  } catch {
    resultado = "Error evaluando la operación";
  }
}

document.getElementById("resultado").textContent = resultado;
