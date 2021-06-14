/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */ 
alert("Bem vindo ao jogo Black Jack!!!")
let jogo = confirm("Quer iniciar o jogo?")
if (jogo === false) {
   alert("Você desistiu do jogar")
}else{
   let carta1Jogador = comprarCarta()
   let carta2Jogador = comprarCarta()
 
  // if (carta1Jogador && carta2Jogador === ('A')){
     // console.log("Combinação não permitida, compre novas cartas!")

     // let (jogo)
   //}else 
  
let carta1Pc = comprarCarta()
let carta2Pc = comprarCarta() 


let pontuacaoUsuario = carta1Jogador.valor + carta2Jogador.valor
let pontuacaoPc = carta1Pc.valor + carta2Pc.valor

console.log(`Usuario - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - ${pontuacaoUsuario}`)
console.log(`Computador - cartas: ${carta1Pc.texto} ${carta2Pc.texto} - ${pontuacaoPc}`)
}
