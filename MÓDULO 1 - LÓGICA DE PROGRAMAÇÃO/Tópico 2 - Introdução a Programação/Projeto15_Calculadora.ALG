
Algoritmo "Calculadora"

Var
   n1, n2, opcao : inteiro
   
Inicio
Escreva("Digite UM numero: ")
   leia(n1)
   Escreva("Digite outro numero: ")
   leia(n2)
   escreval("----------------------------------------")
   escreval("Digite o numero para operação desejada: ")
   escreval("----------------------------------------")
   escreval("(1) - soma")
   escreval("")
   escreval("(2) - subtração")
   escreval("")
   escreval("(3) - multiplicação")
   escreval("")
   escreval("(4) - divisão")
   escreval("")
   escreval("(0) - sair")
   escreval("")
   leia (opcao)

   Escolha (opcao)

   caso 1
       escreval ("soma")
       escreval ("A soma dos numeros é: ", n1 + n2)

   caso 2
      escreval ("subtração")
      escreval ("A subtração dos numeros é: ", n1 - n2)
      
   caso  3
      escreval ("multiplicação")
      escreval ("A multilicação dos numeros é: ", n1 * n2)
      
   caso 4
      escreval ("divisão")
      escreval ("A divisão dos numeros é: ", n1 / n2)
      
   caso 0
      escreval ("Sair")
      
   outrocaso
      escreval ("Essa opção não existe")
      
   FimEscolha
   
Fimalgoritmo