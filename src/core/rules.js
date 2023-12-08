export const rules = {
  required: (v) => !!v || "Obrigatório",
  validEmail: (valor) => {
    if (valor.length > 0) {
      const pattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return pattern.test(valor) || "E-mail inválido";
    }

    return true;
  },
  imageSize: (valor) => {
    if(valor.length > 0) {
      return !valor || !valor.length || valor[0].size < 2000000 || 'Avatar precisa ser menor que 2 MB!'
    }
  }
};
