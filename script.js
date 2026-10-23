function calcular(operacao) {
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);
    let resultado = 0;

    if (operacao === '+') {
        resultado = n1 + n2;
    } else if (operacao === '-') {
        resultado = n1 - n2;
    }

    document.getElementById("resultado").innerText = resultado;
}
