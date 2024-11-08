const btnCalcular = document.getElementById("btnCalcular");
const btnLimpiar = document.getElementById("btnLimpiar");

function calcular() {
    const numero = document.getElementById("idOpcion").value;
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Resultado: <br>";

    let res = "";
    for (let con = 1; con <= 10; con++) {
        res += `${numero} x ${con} = ${numero * con}<br>`;
    }
    resultado.innerHTML += res;
}

function limpiar() {
    document.getElementById("resultado").innerHTML = "Resultado:";
}

btnCalcular.addEventListener("click", calcular);
btnLimpiar.addEventListener("click", limpiar);