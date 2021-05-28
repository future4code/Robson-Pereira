console.log("Boa noite, Johnson!")
// console.log('Boa noite, Johnson!')
// console.log(`Boa noite, Johnson!`)

// const meuNome = 'Bruno'

// console.log("Olá, 'meu' `nome` é", meuNome, ".")

// const ola = `Ola, meu nome é ` + meuNome + "."
// console.log(ola)

// const olaTemplateString = `Ola, 'meu' "nome" é ${meuNome}. Mas gostaria que 'fosse' "Pedro"`
// console.log(olaTemplateString)


// Exercício 1
// const nome = prompt("Qual seu nome?")
// const cor = prompt("Qual sua cor favorita?")

// console.log(`A cor favorita de ${nome} é ${cor}`)
// console.log("A cor favorita de " + nome + " é " + cor)

// Propriedade length
// const numeros = "123456 a789"

// console.log(numeros)
// console.log(numeros.length)

// Métodos toLowerCase / toUpperCase
// const letras = "AaBbCcDdEeFf"

// console.log("original", letras)
// console.log("toLowerCase", letras.toLowerCase())
// console.log("toUpperCase", letras.toUpperCase())

// Método trim
// const qualquerCoisa = "      abobrinha e maçã    "

// console.log(qualquerCoisa)
// console.log(qualquerCoisa.trim())

// Método includes
// const compras = "cenoura, beterraba, queijo, feijão"

// console.log(compras.includes("cenoura")) // true
// console.log(compras.includes("arroz")) // false
// console.log(compras.includes("farinha")) // false
// console.log(compras.includes("queijo")) // true
// console.log(compras.includes("feijão")) // true
// console.log(compras.includes("feijao")) // false
// console.log(compras.includes("Feijao")) // false

// Método replaceAll
// const meses = "janeiro,fevereiro,março,abril,maio,junho,julho,agosto,setembro,outubro,novembro,dezembro"
// const meses2 = "janeiro\nfevereiro\nmarço\nabril\nmaio\njunho\njulho\nagosto\nsetembro\noutubro\nnovembro\ndezembro"
// console.log(meses)
// console.log(meses2)
// console.log(meses.replace(",", "\n"))
// console.log(meses.replaceAll(",", "\n"))

// Exercício 2
// const frase = prompt("Insira uma frase!")

// console.log("Maiúsculas", frase.toUpperCase())

// let fraseNaLinguaI = frase.replaceAll("a", "i")
// fraseNaLinguaI = fraseNaLinguaI.replaceAll("e", "i")
// fraseNaLinguaI = fraseNaLinguaI.replaceAll("o", "i")
// fraseNaLinguaI = fraseNaLinguaI.replaceAll("u", "i")

// console.log("Lingua I", fraseNaLinguaI)

// console.log("Tamanho", frase.length)


// Exercício 9 Lista JS
// const frase1 = prompt("Insira uma frase!")
// const frase2 = prompt("Insira outra frase!")

// const saoIguais = frase1.toLowerCase() === frase2.toLowerCase()

// console.log("saoIguais", saoIguais)

// Arrays
// const ultimoMes = prompt("insira o último mês do ano:")
// const meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", ultimoMes]
// console.log(meses[3]) //Qual o item na posição 3? 
// console.log(meses[11])
// console.log(meses)


// Exercício 2
// const racas = ["pastor-alemão", "buldogue", "labrador", "poodle", "golden retriever"]

// console.log("Primeiro:", racas[0])
// console.log("Segundo:", racas[1])
// console.log("Terceiro:", racas[2])
// console.log("Quarto:", racas[3])
// console.log("Quinto:", racas[4])

// const posicao = Number(prompt("Escolha uma das raças, de 1 a 5:"))
// console.log(racas[posicao - 1])


// Propriedade length
// const racas2 = ["pastor-alemão", "buldogue", "poodle", "golden retriever", "labrador"]
// console.log("Última raça", racas2[racas2.length - 1]) // labrador

// // Método push
// racas2.push("chiuaua")
// console.log("Nova última raça", racas2[racas2.length - 1]) // chiuaua
// console.log(racas2)

// // Método pop
// racas2.pop()
// racas2.pop()
// console.log("Nova última raça", racas2[racas2.length - 1])// golden retriever
// console.log(racas2)

// // Método includes
// console.log(racas2.includes("dobberman")) // false
// console.log(racas2.includes("poodle")) // true
// console.log(racas2.includes("poodl")) // false
// console.log(racas2.includes("pastor-alemão")) // true
// console.log(racas2.includes("Pastor-Alemão")) // false
// console.log(racas2.includes("husky siberiano")) // false

// // Método splice
// console.log("array original", racas2)
// const a = racas2.splice(1, 1) // retiro 1 elemento a partir do indíce 1
// console.log("retorno do 1o splice", a)
// console.log("depois 1 splice", racas2)
// const b = racas2.splice(2, 3) // retiro 3 elementos a partir do intíce 2
// console.log("retorno do 2o splice", b)
// console.log("depois 2 splice", racas2)
// const c = racas2.splice(0, 4) // retiro 4 elementos a partir do indice 0
// console.log("retorno do 3o splice", c)
// console.log("depois 3 splice", racas2)

// Exercício 4
// const numeros = [1, 2, 3, 4, 5, 6]

// console.log("Tamanho inicial do array", numeros.length)
// numeros.push(7)
// console.log("Após push", numeros)
// numeros.splice(3, 2)
// console.log("Após splice", numeros)
// console.log("Tamanho final do array:", numeros.length)

// Exercício 5 da Lista de JS
// const cor1 = prompt("Primeira cor:")
// const cor2 = prompt("Segunda cor:")
// const cor3 = prompt("Terceira cor:")

// const cores = [cor1, cor2, cor3]
// console.log(cores)

// cores.splice(1, 1)
// console.log(cores)

// delete cores[2]
// console.log(cores)

// Pseudo-código exercício 10 da Lista de JS
/*
pede ao usuario ano atual e guarda em number
pede ao usuario ano de nascimento e guarda em number
pede ao usuario ano de emissao do documento e guarda em number

calcular minha idade = ano atual - ano nascimento
calcular idade documento = ano atual - ano emissao doc

testar primeira hipotese
(minha idade <= 20 E idade doc >= 5)

testar segunda hipotese
(20 < minha idade <= 50 E idade doc >= 10)

testar terceira hipotése

verificar primeira OU segunda OU terceira
*/


// Pseudo-código exercício 8 da Lista de JS
/*

pede string1 e guarda
pede string2 e guarda

verifico se string1.length é igual a string2.length

*/

