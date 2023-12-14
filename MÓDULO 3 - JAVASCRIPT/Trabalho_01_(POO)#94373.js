// Definindo o objeto Livro
class Livro {
  constructor(titulo, autor, numPaginas) {
    this.titulo = titulo;
    this.autor = autor;
    this.numPaginas = numPaginas;
  }

  abrir() {
    console.log(`O livro "${this.titulo}" foi aberto.`);
  }

  fechar() {
    console.log(`O livro "${this.titulo}" foi fechado.`);
  }

  obterResumo() {
    console.log(`Resumo do livro "${this.titulo}" por ${this.autor}: ...`);
  }
}

// Exemplo de uso do objeto Livro
const meuLivro = new Livro("Aventuras no Mundo JavaScript", "Autor XYZ", 300);
meuLivro.abrir();
meuLivro.obterResumo();

// Definindo o objeto Bola de Tênis
class BolaDeTenis {
  constructor(cor, diametro, material) {
    this.cor = cor;
    this.diametro = diametro;
    this.material = material;
  }

  quicar() {
    console.log(`A bola de tênis ${this.cor} está quicando.`);
  }

  arremessar() {
    console.log(`A bola de tênis ${this.cor} foi arremessada.`);
  }

  comprimir() {
    console.log(`A bola de tênis ${this.cor} está sendo comprimida.`);
  }
}

// Exemplo de uso do objeto Bola de Tênis
const minhaBola = new BolaDeTenis("Amarela", 2.5, "Borracha");
minhaBola.quicar();
minhaBola.arremessar();

// Definindo o objeto Conta Bancária
class ContaBancaria {
  constructor(saldo, numConta, titular) {
    this.saldo = saldo;
    this.numConta = numConta;
    this.titular = titular;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(`Depósito de ${valor} realizado. Novo saldo: ${this.saldo}`);
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de ${valor} realizado. Novo saldo: ${this.saldo}`);
    } else {
      console.log("Saldo insuficiente para saque.");
    }
  }

  consultarSaldo() {
    console.log(`Saldo atual da conta: ${this.saldo}`);
  }
}

// Exemplo de uso do objeto Conta Bancária
const minhaConta = new ContaBancaria(1000, "123456", "João Silva");
minhaConta.depositar(500);
minhaConta.sacar(200);
minhaConta.consultarSaldo();

// Definindo o objeto Calendário
class Calendario {
  constructor(ano, mes, dia) {
    this.ano = ano;
    this.mes = mes;
    this.dia = dia;
  }

  avancarDia() {
    console.log(`Avançando para o próximo dia.`);
    this.dia += 1;
  }

  retrocederDia() {
    console.log(`Retrocedendo para o dia anterior.`);
    this.dia -= 1;
  }

  exibirData() {
    console.log(`Data atual: ${this.dia}/${this.mes}/${this.ano}`);
  }
}

// Exemplo de uso do objeto Calendário
const meuCalendario = new Calendario(2023, 11, 20);
meuCalendario.exibirData();
meuCalendario.avancarDia();
meuCalendario.exibirData();
