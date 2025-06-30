export const getDateStringArray = () =>
  new Date().toJSON().slice(0, 10).split("-");

export const getTomorrowDateString = () => {
  const [year, month, day] = getDateStringArray();
  return `${year}-${month}-${parseInt(day) + 1}`;
};

export const getCurrentDate = () => {
  const date = new Date();
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();

  return {
    month,
    year,
  };
};
