try {
  // Solicita dois números ao usuário
  var numero1 = parseFloat(prompt("Digite o primeiro número:"));
  var numero2 = parseFloat(prompt("Digite o segundo número:"));

  // Verifica se o segundo número é zero
  if (numero2 === 0) {
      throw new Error("Não é possível dividir por zero.");
  }

  // Realiza a operação matemática
  var resultado = numero1 / numero2;

  // Exibe o resultado
  alert("O resultado da divisão é: " + resultado);
} catch (excecao) {
  // Captura e trata a exceção
  alert("Ocorreu um erro: " + excecao.message);
} finally {
  // Executa o bloco de código no final, independentemente de ter ocorrido uma exceção ou não
  alert("Programa encerrado.");
}
