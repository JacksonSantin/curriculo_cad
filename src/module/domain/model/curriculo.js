import { Endereco } from "./endereco";
import { Telefones } from "./telefones";
import { Formacao } from "./formacao";
import { ExperienciaProfissional } from "./experienciaProfissional";
import { Idiomas } from "./idiomas";

class Curriculo {
  constructor({
    nome = "",
    nacionalidade = "",
    emailPrincipal = "",
    foto = "",
    bio = "",
    objetivo = "",
    atuacao = "",
    dtNascimento = "",
    descricaoDeficiencia = "",
    site = "",
    possuiFilhos = false,
    disponivelEntrevista = false,
    possuiCNH = false,
    disponivelViagens = false,
    pcd = false,
    categoriaCNH = 0,
    estadoCivil = 0,
    sexo = 0,
    idade = 0,
    qtdFilhos = 0,
    endereco = [new Endereco({})],
    telefones = [new Telefones({})],
    formacao = [new Formacao({})],
    experienciaProfissional = [new ExperienciaProfissional({})],
    idiomas = [new Idiomas({})],
  }) {
    this.nome = nome;
    this.nacionalidade = nacionalidade;
    this.emailPrincipal = emailPrincipal;
    this.foto = foto;
    this.bio = bio;
    this.objetivo = objetivo;
    this.atuacao = atuacao;
    this.dtNascimento = dtNascimento;
    this.descricaoDeficiencia = descricaoDeficiencia;
    this.site = site;
    this.possuiFilhos = possuiFilhos;
    this.disponivelEntrevista = disponivelEntrevista;
    this.possuiCNH = possuiCNH;
    this.disponivelViagens = disponivelViagens;
    this.pcd = pcd;
    this.sexo = sexo;
    this.estadoCivil = estadoCivil;
    this.categoriaCNH = categoriaCNH;
    this.idade = idade;
    this.qtdFilhos = qtdFilhos;
    this.endereco = endereco.map((endereco) => new Endereco(endereco));
    this.telefones = telefones.map((telefones) => new Telefones(telefones));
    this.formacao = formacao.map((formacao) => new Formacao(formacao));
    this.experienciaProfissional = experienciaProfissional.map(
      (experiencia) => new ExperienciaProfissional(experiencia)
    );
    this.idiomas = idiomas.map((idioma) => new Idiomas(idioma));
  }

  toSave() {
    const payload = { ...this };

    console.log(
      "🚀 ~ file: curriculo.js:57 ~ Curriculo ~ toSave ~ payload:",
      payload
    );
    return payload;
  }
}

export { Curriculo };
