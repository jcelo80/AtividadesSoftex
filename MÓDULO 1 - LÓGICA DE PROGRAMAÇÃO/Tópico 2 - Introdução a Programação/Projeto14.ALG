Algoritmo "Projeto14_Erro_DataNascimento"

Var
   nome : caractere
   ano_nasc, ano_atual, idade : inteiro

Inicio
      escreva("Digite seu nome completo: ")
      leia(nome)
      escreva("Digite seu ano de nascimento: ")
      leia(ano_nasc)

      ano_atual <- 2023
      idade <- ano_atual - ano_nasc

      escreva("Sua idade e:", idade)

       Se ano_nasc > 2023  entao
          escreva ("ERRO! Digite um valor correto!")
       FimSe

Fimalgoritmo