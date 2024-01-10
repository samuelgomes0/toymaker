module.exports = function formatDate(dateString) {
  // Criar um objeto de data a partir da string
  const date = new Date(dateString);

  // Obter o dia, mês e ano
  const day = date.getDate();
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Formatar a data
  const formattedDate = `${day} de ${month} de ${year}`;

  return formattedDate;
};
