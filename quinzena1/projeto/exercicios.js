/* // Exemplos

// Exercício 0A
function soma() {
  // escreva seu código aqui
  const num1 = prompt('Digite o primeiro número')
  const num2 = prompt('Digite o segundo número')

  console.log(Number(num1) + Number(num2))
}

// Exercício 0B
function imprimeMensagem() {
  // escreva seu código aqui
  const mensagem = prompt('Digite sua mensagem')

  console.log(mensagem)
}
  
// ---------------------------------------------------
// Exercícios

// Exercício 1
function calculaAreaRetangulo() {
  const altura = prompt('Digite a altura')
  const largura = prompt('Digite a largura')

  console.log(Number(altura) * Number(largura))
}

// Exercício 2
function imprimeIdade() {
  const anoA = prompt('Digite o ano atual')
  const anoN = prompt('Digite o ano de nascimento')

  console.log(Number(anoA) - Number(anoN))
} */

// Exercício 3
//IMC = Peso ÷ (Altura × Altura)
/* function calculaIMC() {
   let peso = Number(prompt("Quantos kg vc pesa?"))
  let altura = Number(prompt("Qual é a sua altura?"))
  const IMC = (peso / (altura * altura)).toFixed(2)
  console.log(IMC)
} */

/* // Exercício 4
function imprimeInformacoesUsuario() {
let nome = prompt('Digite seu nome')
let idade = Number(prompt('Digite sua idade'))
let email = prompt('Digite o seu email')

console.log('Meu nome é ' + nome+', tenho ' + idade+' anos, e o meu email é ' + email+'.')
} */

/* // Exercício 5
function imprimeTresCoresFavoritas() {
       const cor1 = prompt('Digite uma cor favorita')
       const cor2 = prompt('Digite outra cor favorita')
       const cor3 = prompt('Digite mais uma cor favorita')
    
       const arrayCores=[cor1, cor2, cor3]
     console.log(arrayCores)
} */

  // ESPAÇO DA AULA
  /* const frase = prompt('Digite uma frase')
  console.log('Maiuscula', frase.toUpperCase())

  let fraseNaLinguaI = frase.replaceAll ("a", "i")
  fraseNaLinguaI = fraseNaLinguaI.replaceAll("e", "i")
  fraseNaLinguaI = fraseNaLinguaI.replaceAll("o", "i")
  fraseNaLinguaI = fraseNaLinguaI.replaceAll("u", "i")
  console.log("Lingua I", fraseNaLinguaI)

  console.log("Tamanho", frase.length) */
  //execicio2
 /*  const raça = ["doberman", "pastor alemão", "labrador", "pincher", "lhasa"]
  const escolha = Number(prompt("Digite um número de 1 até 5 para escolher uma raça de cachorro"))
    console.log(raça[escolha -1])
}
 */
// Exercício 6
/* function retornaStringEmMaiuscula() {
  const string = prompt('Digite uma string')
  console.log(string.toUpperCase())
 
} */

// Exercício 7
/* function calculaIngressosEspetaculo() {
  const custo = prompt('Digite o custo de um espetáculo de teatro')
  const ingresso = prompt('Digite o valor de cada ingresso')

  console.log(custo/ingresso)
} */

// Exercício 8
/* function checaStringsMesmoTamanho() {
  const string1 = prompt("Digite uma palavra")
  const string2 = prompt("Digite outra palavra")
  const resultado = Boolean(string1 >= string2)

  console.log(resultado)
}
 */
// Exercício 9
/* function checaIgualdadeDesconsiderandoCase() {
  const string1 = prompt("Digite uma frase")
  const string2 = prompt("Digite outra frase")

  console.log(string1.toUpperCase() === string2.toUpperCase())

} */

// Exercício 10
/* function checaRenovacaoRG() {
  const anoAtual = prompt('Digite o ano atual')
  const anoNas = prompt('Digite o ano de nascimento')
  const rg = prompt('Digite o ano em que sua carteira de identidade foi emitida')

  const idade = anoAtual - anoNas
  const emissao = anoAtual - rg

  console.log((idade<=20&&emissao>=5) || (idade>20&&idade<=50&&emissao>=10) || (idade>50&&emissao>=15))
}
 */
// Exercício 11
function checaAnoBissexto() {
  // escreva seu código aqui
}

// Exercício 12
/* function checaValidadeInscricaoLabenu() {
  const maior = prompt("É maior de 18") == "sim"
  const ensinoM = prompt("Possui ensino médio completo?") == "sim"
  const dispo = prompt("Possui disponibilidade nos horários de aula?") == "sim"

  console.log(maior&&ensinoM&&dispo) == "sim"
} */