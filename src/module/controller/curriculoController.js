import { ref } from "vue";
import { steps } from "../const/steps";

const curriculoController = (geraRelatorioUseCase) => () => {
  const items = ref(steps);
  return {
    items,
  };
};

export { curriculoController };
