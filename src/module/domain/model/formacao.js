class Formacao {
  constructor({
    graduacao = "",
    nomeCurso = "",
    instituicao = "",
    cidade = "",
  }) {
    this.graduacao = graduacao;
    this.nomeCurso = nomeCurso;
    this.instituicao = instituicao;
    this.cidade = cidade;
  }
}

export { Formacao };
