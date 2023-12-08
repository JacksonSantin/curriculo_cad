const geraRelatorioUseCase =
  (repository) =>
  async ({ template, data }) => {
    try {
      const response = await repository({ template, data });
      const file = new Blob([response], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (error) {
      throw error;
    }
  };

export { geraRelatorioUseCase };
