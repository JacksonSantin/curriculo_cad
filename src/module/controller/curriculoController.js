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
import Toastify from "toastify-js";

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
  const carregando = ref(false);
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

  const gerarCurriculo = async () => {
    try {
      carregando.value = true;

      const template = {name: "/curriculo/model"}
      const data = curriculoModel.value

      await geraRelatorioUseCase({
        template,
        data
      })

    } catch (error) {
      Toastify({
        text: error,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        style: {
          background: "red",
          borderRadius: "50px",
        },
      }).showToast();
    } finally {
      carregando.value = false;
    }
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
    carregando,
    datePicker,
    alteraArray,
    gerarCurriculo,
  };
};

export { curriculoController };
