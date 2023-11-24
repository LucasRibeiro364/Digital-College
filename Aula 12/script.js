const calcularIMC = () => {
    let altura = parseFloat(prompt("Qual a sua altura?"))
    let peso = parseFloat(prompt("Qual o seu peso?"))

    let imc = peso / (altura * altura)

    if (imc > 40) {
        alert("Obesidade grau 3")
    } else (imc) > 35 && (imc <= 40) {
        alert("Está muito boa")
    } else {
        alert("Está muito frio")
    }
}