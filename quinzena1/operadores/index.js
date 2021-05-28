//EXERCICIO 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) // true

console.log("d. ", typeof resultado) // boolean

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) // "numeros concatenados por serem strings"

//EXERCICIO 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

//EXERCICIO 3

//Sugiro colocar "Number" antes do prompt

//EXERCICIO 1 - código

//a) Pergunte a idade do usuário

/* b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo) */

let idadeUser =  Number(prompt("Qual a sua idade"))
let amigoUser = Number(prompt("Qual a idade de sua melhor amiga"))

console.log("Sua idade é maior do que a do seu melhor amiga", Boolean(idadeUser > amigoUser))
console.log(idadeUser - amigoUser)

/* EXERCICIO 2 - CODIGO
a) Peça ao usuário que insira um número **par**

b) Imprima na console **o resto da divisão** desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código */

let nPar = Number(prompt("Digite um número par"))
let resto = nPar % 2
console.log(resto)
//todo número resta 0 e no número impar 1

//EXERCICIO 3 - CÓDIGO
/* Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console
a) A idade do usuário em meses

b) A idade do usuário em dias

c) A idade do usuário em horas */

let idadeUser = Number(prompt("Qual a sua idade?"))

const idadeMeses = idadeUser * 12
const idadeDias = idadeUser * 365
const idadeHoras = idadeUser * 8760

console.log("idade em meses",idadeMeses)
console.log("idade em dias",idadeDias)
console.log("idade em horas",idadeHoras)

//EXERCICIO 4 - Código
//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:
/* O primeiro numero é maior que segundo? true
O primeiro numero é igual ao segundo? false
O primeiro numero é divisível pelo segundo? true
O segundo numero é divisível pelo primeiro? true */

let n1 = Number(prompt("Digite um numero"))
let n2 = Number(prompt("Digite outro numero"))

/* console.log = Boolean("o primeiro número é maior que o segundo", n1 > n2)
console.log = Boolean("O primeiro numero é igual ao segundo?,", n1 == n2)
console.log = Boolean("O primeiro numero é divisível pelo segundo?",(n1 / n2) % 2 )
console.log = Boolean("O segundo numero é divisível pelo primeiro?", (n2 / n1) % 2) */

console.log = Boolean(n1 > n2)
console.log = Boolean(n2 == n2)
console.log = Boolean(n1 % n2) == 0
console.log = Boolean(n2 % n1) == 0