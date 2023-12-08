class Formacao {
  constructor({
    id = 0,
    graduacao = "",
    nomeCurso = "",
    instituicao = "",
    cidade = "",
  }) {
    this.id = id;
    this.graduacao = graduacao;
    this.nomeCurso = nomeCurso;
    this.instituicao = instituicao;
    this.cidade = cidade;
  }
}

export { Formacao };
