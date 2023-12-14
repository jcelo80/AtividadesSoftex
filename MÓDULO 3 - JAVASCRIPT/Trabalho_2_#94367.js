// Função tradicional sem parâmetros
function funcaoSemParametro() {
  console.log("Essa é uma função tradicional sem parâmetros.");
}

funcaoSemParametro();

// Função tradicional com parâmetros e retorno de valor
function soma(a, b) {
  return a + b;
}

let resultadoSoma = soma(3, 5);
console.log("Resultado da soma:", resultadoSoma);

// Arrow function com parâmetros e retorno de valor
const multiplicacao = (x, y) => {
  return x * y;
};

let resultadoMultiplicacao = multiplicacao(4, 6);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);
