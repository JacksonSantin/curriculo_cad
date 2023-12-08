import { axiosInstance } from "@/core/axios";
import { geraRelatorioRepository } from "../data/repository/geraRrelatorioRepository";
import { geraRelatorioUseCase } from "../domain/usecase/geraRelatorioUseCase";
import { curriculoController } from "../controller/curriculoController";

const instance = axiosInstance;
const geraRelatorioRepositoryImpl = geraRelatorioRepository(instance);
const geraRelatorioUseCaseImpl = geraRelatorioUseCase(
  geraRelatorioRepositoryImpl
);
const curriculoControllerImpl = curriculoController(geraRelatorioUseCaseImpl);

export { curriculoControllerImpl };
