class ExperienciaProfissional {
  constructor({
    nomeExperiencia = "",
    localTrablhado = "",
    anoInicio = "",
    anoFim = "",
    atual = false
  }) {
    this.nomeExperiencia = nomeExperiencia;
    this.localTrablhado = localTrablhado;
    this.anoInicio = anoInicio;
    this.anoFim = anoFim;
    this.atual = atual;
  }
}

export { ExperienciaProfissional };
