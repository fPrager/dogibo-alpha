const getDaysTo = (
  day: number,
  month: number,
  year: number = new Date().getFullYear(),
) : number => {
  const oneDay = 24 * 60 * 60 * 1000;
  const secondDate = new Date(year, month - 1, day);
  const firstDate = new Date();

  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
};

export default getDaysTo;
