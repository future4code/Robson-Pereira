//EXERCICIO 1 ESCRITO

/* const usuarios = [
    { nome: "Amanda Rangel", apelido: "Mandi" },
    { nome: "Laís Petra", apelido: "Laura" },
    { nome: "Letícia Chijo", apelido: "Chijo" }
  ]
  
  const novoArrayA = usuarios.map((item, index, array) => {
     console.log(item, index, array)
  })
   */ //resposta // irá imprimir 3x o array usuarios
   
   //EXERCICIO 2 ESCRITO
  /*  const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayB = usuarios.map((item, index, array) => {
       return item.nome
    })
    
    console.log(novoArrayB) */
    // resposta // irá imprimir o nome 1x de cada pessoa

    // EXERCICIO 3 ESCRITO
   /*  const usuarios = [
      { nome: "Amanda Rangel", apelido: "Mandi" },
      { nome: "Laís Petra", apelido: "Laura" },
      { nome: "Letícia Chijo", apelido: "Chijo" },
    ]
    
    const novoArrayC = usuarios.filter((item, index, array) => {
       return item.apelido !== "Chijo"
    })
    
    console.log(novoArrayC) */
    // resposta // irá imprimir 1x quem não tem o apelio "Chijo"

    //exercicio 1 codigo//
    /* const pets = [
      { nome: "Lupin", raca: "Salsicha"},
      { nome: "Polly", raca: "Lhasa Apso"},
      { nome: "Madame", raca: "Poodle"},
      { nome: "Quentinho", raca: "Salsicha"},
      { nome: "Fluffy", raca: "Poodle"},
      { nome: "Caramelo", raca: "Vira-lata"},
   ]
   const apenasNomes = pets.map((pets, indice, array) => {
      return pets.nome 
   })

   const petSalsicha = pets.filter((pets, indice, array) => {
      return pets.raca === "Salsicha"
   })

   const apenasPoodles = pets.filter((pets, indice, array) =>{
      return pets.raca === "Poodle"

   })/* .map((pets, indice, array) => {
      return pets.indice = [2, 4]
   })  */  

   //const apenasDesconto = 
   /* console.log(apenasNomes)
   console.log(petSalsicha)
   console.log("Você ganhou um cupom de desconto de 10% para tosar o/a:", apenasPoodles) */
 
   // EXERCICIO 2 codigo 

   const produtos = [
      { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
      { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
      { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
      { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
      { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
      { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
      { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
      { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
      { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
      { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
   ]

   const nomeDosProdutos = produtos.map((produtos, indice, array) => {
      return produtos.nome
   })

   const apenasBebidas = produtos.filter((produtos, indice, array) => {
   return produtos.categoria === "Bebidas"
   })
   console.log(apenasBebidas)
   console.log(nomeDosProdutos)


   