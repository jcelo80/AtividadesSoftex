// Definindo o objeto Banco
const Banco = {
  conta: 123456, // Número da conta
  saldo: 1000,   // Saldo inicial
  tipoConta: 'Corrente', // Tipo de conta
  agencia: '001', // Número da agência

  // Método para buscar o saldo atual
  buscarSaldo: function () {
    return this.saldo;
  },

  // Método para realizar um depósito
  deposito: function (valor) {
    this.saldo += valor;
    return `Depósito de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
  },

  // Método para realizar um saque
  saque: function (valor) {
    if (valor > this.saldo) {
      return 'Saldo insuficiente. Saque não realizado.';
    }

    this.saldo -= valor;
    return `Saque de R$${valor} realizado. Novo saldo: R$${this.saldo}`;
  },

  // Método para obter o número da conta
  numeroConta: function () {
    return this.conta;
  }
};

// Exemplos de uso
console.log('Saldo atual:', Banco.buscarSaldo());
console.log(Banco.deposito(500));
console.log(Banco.saque(200));
console.log('Número da conta:', Banco.numeroConta());
