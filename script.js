const path = window.location.pathname;
const operacion = decodeURIComponent(path.slice(1));
console.log(operacion);

let resultado;
try {
  resultado = eval(operacion);
} catch (e) {
  resultado = "Error en la operación";
}
console.log(resultado);

document.getElementById("resultado").textContent = resultado;
