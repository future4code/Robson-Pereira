//Execicio 1 - escrita
/* function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))
a) O que vai ser impresso no console? = (10) (50)
b) O que aconteceria se retirasse os dois console.log e simplesmente 
invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console? = não exibiria(retornaria) o resultado

Execicio 2 - escrita*/
/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta) */ // = transforma o texto com a palavra cenoura em minúscula 
// eu gosto de cenoura
//cenoura é bom pra vista
//Cenouras crescem na terra // creio q não há mudanças

//Execicio 1 - código
/* 
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem 
falando algumas informações sobre você, como: 

```
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
```

Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
 Lembrando que a função não possui entradas, apenas imprime essa mensagem.

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa:
 o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`).
  Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem
  com o template:

```
Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
```

const nome = "Robson"
    const idade = "38"
    const endereço = "Rua B"
    const profissão = "vendedor"
function meusDados () {
    

    return dados= (nome)
    }
     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}`) */

//Exercicio 2 - codigo 
     
 a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado.
   Invoque a função e imprima no console o resultado.

b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem,
 juntamente com uma versão dela em letras maiúsculas.

 //a
 function calcularValor(valor1, valor2) {
     
    const soma = (valor1 + valor2) 
    return soma
  }
 
  const resposta = calcularValor(78, 47)
  console.log(resposta)