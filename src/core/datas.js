import moment from "moment";

export const converteDataPadrao = (valor, padrao, para) =>
  valor ? moment(valor, padrao).format(para) : "";
