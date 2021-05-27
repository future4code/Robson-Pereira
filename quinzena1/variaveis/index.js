// //- **Exercícios de interpretação de código**
// 1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

// ```jsx
// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(10, 5)
// ```

// 2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**

// ```jsx
// let a = 10
// let b = 20
// let c = a
// let c = a
// let b = c
// let a = b

// console.log("o valor de a é",a)
// console.log("o valor de b é", b)
// console.log("o valor de c é"c)
// ```

// 3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.

// ```jsx
// let horaTrabalho = prompt("Quantas horas você trabalha por dia?")
// let valorDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${valorDia/horaTrabalho} por hora`)

const nome = "Rob"
const idade = 38
typeof nome //string, por ser uma variável de texto
typeof idade //number, por ser uma variável numérica

const nome = prompt("Qual é o seu nome?")
const idade = Number(prompt("Qual a sua idade?"))

console.log(typeof nome)
console.log(typeof idade)

console.log("Olá,",nome,"você tem,"idade,"anos")

//Exercicio 2

let temperatura = Boolean(prompt("Está frio hoje?")) 
console.log(temperatura)

let casado = Boolean(prompt("Você é casado?"))
console.log(casado)

let sorvete = Boolean(prompt("Quer tomar sorvete agora?"))
console.log(sorvete)

//Exercicio 3

let a = 10
let b = 25

let a = c
let b = a
let c = a

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)