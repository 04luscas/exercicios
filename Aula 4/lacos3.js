// exercicio 1
// for (let i = 1; i <= 10; i++) {
//     console.log('programação')
// }

// exercicio 2
// for(let i = 5; i <= 15; i++){
//     console.log(i)
// }

// exercicio 3
//   prompt = require("prompt-sync")()
//  for (let i = 1; i <= 10; i++) {
//     console.log(i)
//    }

// exercicio 4
// prompt = require("prompt-sync")()
// let continuar = true

// while (true) {
//  let nota1 = Number(prompt("Digite a primeira nota: "))
//  let nota2 = Number(prompt("Digite a segunda nota: "))
//  let media = (nota1 + nota2) / 2
//  console.log("A média final é: " + media)

//  let resposta = prompt("Calcular a média de outro aluno? 1. Sim 2. Não ")
//  if (resposta === '2') {
//   continuar = false
//   console.log("Programa encerrado.")
//   break
//  } else if (resposta !== '1') {
//   console.log("Resposta inválida. O programa será encerrado.")
//   continuar = false
//  }
// }

//exercicio 5
// prompt = require("prompt-sync")()
// let valor1 = Number(prompt("Digite o primeiro valor: "))
// let valor2 = Number(prompt("Digite o segundo valor: "))

// while (valor2 === 0) {
//   console.log("Valor inválido")
//   valor2 = Number(prompt("Digite um novo valor para o segundo número: "))
// } 

// let resultado = valor1 / valor2

// console.log(`O resultado da divisão é: ${resultado}`)

// exercicio 6
// prompt = require("prompt-sync")()
// for (let i = 100; i <= 200; i += 10) {
//  console.log(i);
// }

// exercicio 7
// prompt = require("prompt-sync")()
// let valor = Number(prompt("Digite um valor maior que ZERO: "))

// if (valor <= 0) {
//  console.log("O valor deve ser maior que ZERO.")
// } else {
//  for (let i = 1; i <= valor; i++) {
//   console.log(i);
//  }
// }

// exercicio 8
// prompt = require("prompt-sync")()
// let soma = 0
// let contador = 0

// while (contador < 10) {
//   let valor = prompt(`Digite o valor ${contador + 1}: `)
//   valor = Number(valor)

//   if (isNaN(valor)) {
//     console.log("Entrada inválida. Por favor, digite um valor numérico.")
//     continue
//   }

//   soma += valor
//   contador++
// }
 
// const media = soma / contador
// console.log(`A média aritmética dos valores é: ${media}`)

// exercicio 9
// prompt = require("prompt-sync")()
// let contadores = {
// alcool: 0,
// gasolina: 0,
// diesel: 0
// }

// const nomeCombustivel = (codigo) => {
//  switch (codigo) {
//   case 1:
//    console.log("Álcool.")
//    contadores.alcool++
//    break;
//   case 2:
//    console.log("Gasolina.")
//    contadores.gasolina++
//    break;
//   case 3:
//    console.log("Diesel.")
//    contadores.diesel++
//    break;
//   case 4:
//    console.log("MUITO OBRIGADO!")
//    break;
//   default:
//    console.log("Código inválido.")
//  }
// }

// while (true) {
//  let codigo = Number(prompt("Digite o código do combustível: 1. Álcool 2. Gasolina 3. Diesel 4. Fim. "))
//  if (codigo === 4) {
//   nomeCombustivel(codigo)
//   break
//  }
//  nomeCombustivel(codigo)
// }

// console.log(`Quantidade de clientes que abasteceram cada tipo de combustível:`);
// console.log(`Álcool: ${contadores.alcool}`)
// console.log(`Gasolina: ${contadores.gasolina}`)
// console.log(`Diesel: ${contadores.diesel}`)

// exercicio 10
// prompt = require("prompt-sync")()

// while (true) {
//   let valor = Number(prompt("Digite um valor inteiro (ou '0' para encerrar): "))
//   if (valor === 0) {
//     break 
//   }

//   if (valor % 2 === 0) {
//     console.log(`O valor ${valor} é PAR.`)
//   } else {
//     console.log(`O valor ${valor} é ÍMPAR.`)
//   }
// }
  
// console.log("Programa encerrado!")

// exercicio 11
// prompt = require("prompt-sync")()
// const estudantes = Number(prompt("Qual o número de estudantes? "))
// let somaNotas = 0

// for (let i = 0; i < estudantes; i++) {
//   let nota = Number(prompt(`Qual a nota do aluno ${i+1}? `)) 
//   somaNotas += nota
// }

// const media = somaNotas / estudantes
// console.log(`A média da turma é ${media.toFixed(1)}`)