class Endereco {
  constructor({
    rua = "",
    numero = 0,
    complemento = "",
    bairro = "",
    cidade = "",
    uf = "",
    cep = ""
  }) {
    this.rua = rua;
    this.numero = numero;
    this.complemento = complemento;
    this.bairro = bairro;
    this.cidade = cidade;
    this.uf = uf;
    this.cep = cep;
  }
}

export { Endereco }