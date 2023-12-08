const geraRelatorioRepository =
  (axios) =>
  async ({ template, data }) => {
    try {
      const response = await axios.post(
        "/api/report",
        {
          template: template,
          data: data,
        },
        {
          headers: {
            Authorization: "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==",
          },
          responseType: "arraybuffer",
        }
      );

      return response.data;
    } catch (error) {
      throw error;
    }
  };

export { geraRelatorioRepository };
