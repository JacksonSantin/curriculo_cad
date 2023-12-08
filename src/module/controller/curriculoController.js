import { ref } from "vue";
import { steps } from "../const/steps";
import { Curriculo } from "../domain/model/curriculo";
import { Telefones } from "../domain/model/telefones";
import { Formacao } from "../domain/model/formacao";
import { ExperienciaProfissional } from "../domain/model/experienciaProfissional";
import { Idiomas } from "../domain/model/idiomas";
import {
  cbbCategoriaCNH,
  cbbEstadoCivil,
  cbbNivelIdioma,
  cbbSexo,
  cbbTipoFone,
} from "../const/formCbb";
import { rules } from "@/core/rules";

const curriculoController = (geraRelatorioUseCase) => () => {
  const items = ref(steps);
  const regras = ref(rules);
  const curriculoModel = ref(new Curriculo({}));
  const comboSexo = ref(cbbSexo);
  const comboEstadoCivil = ref(cbbEstadoCivil);
  const comboCategoriaCNH = ref(cbbCategoriaCNH);
  const comboTipoFone = ref(cbbTipoFone);
  const comboNivelIdioma = ref(cbbNivelIdioma);
  const menu = ref(false);
  const datePicker = ref("");

  const alteraArray = (nome, indice = 0) => {
    const models = {
      telefones: Telefones,
      formacao: Formacao,
      experienciaProfissional: ExperienciaProfissional,
      idiomas: Idiomas,
    };

    return {
      adiciona: () => curriculoModel.value[nome].push(new models[nome]({})),
      remove: () => curriculoModel.value[nome].splice(indice, 1),
    };
  };

  const gerarCurriculo = () => {
    console.log(curriculoModel.value);
  };

  return {
    items,
    regras,
    curriculoModel,
    comboSexo,
    comboEstadoCivil,
    comboCategoriaCNH,
    comboTipoFone,
    comboNivelIdioma,
    menu,
    datePicker,
    alteraArray,
    gerarCurriculo
  };
};

export { curriculoController };
