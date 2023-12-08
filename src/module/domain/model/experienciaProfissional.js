class ExperienciaProfissional {
  constructor({
    id = 0,
    nomeExperiencia = "",
    localTrablhado = "",
    anoInicio = "",
    anoFim = "",
    atual = false
  }) {
    this.id = id;
    this.nomeExperiencia = nomeExperiencia;
    this.localTrablhado = localTrablhado;
    this.anoInicio = anoInicio;
    this.anoFim = anoFim;
    this.atual = atual;
  }
}

export { ExperienciaProfissional };
