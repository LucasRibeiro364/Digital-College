// Faça um script que leia um número do usuário e calcule a soma dos números de 1 a até o número que o usuário digitou
const numero = Number(prompt("Digite um número"))
let soma = 0;
for (let i = 1; i <= numero; i++) {
  soma += i;
}
alert(`A soma é ${soma}`)
// alert("A soma é "+ soma)

const somaNumeros = (numero) => {
  let soma = 0;
  for (let i = 1; i <= numero; i++) {
    soma += i;
  }
    return soma;
}








// Loop For, For Of, While e ForEach em uma lista: Crie uma lista de cinco frutas e use um loop for para imprimir cada fruta da lista.
const frutas = ["A", "B", "C", "D", "E"]

for (let i = 0; i < frutas.length; i++){
  console.log(frutas[i])
}
// ou
for (let elemento of frutas){
  console.log(frutas)
}

// Escreva um programa que conte quantas letras "a" tem em uma frase.
const texto = "O javascript trata isso como uma lista de caracteres"
let contador = 0;
for (let letra of texto) {
  if (letra.toLocaleLowerCase() === "a"){
    contador++;
  }
}
console.log(contador)

// Faça um carrinho de compras com pelo menos 3 produtos e imprima o valor total dos produtos, cada produto deve ter nome e preço.

//foto


// Dado o seguinte array: [2, 4, 6, 15, 7, 9, 11, 300], retorne um outro array somente com os números menores do que 4 ou maiores do que 9.

const number = [2, 4, 6, 15, 7, 9, 11, 300];
const filteredNumber = number.filter(function(number) {
    return number < 4 || number > 9;
});
console.log(filteredNumber); 

// Dado o seguinte array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] retorne um outro array somente com os números pares.



// 1. Dado o seguinte array: [2, 4, 6, 15, 7, 9, 11, 300], retorne um novo array com o quadrado dos itens.
const array = [2, 4, 6, 15, 7, 9, 11, 300]
array.map((elemento) => elemento * elemento)






