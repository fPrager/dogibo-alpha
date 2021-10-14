import moment from 'moment';

const getDaysTo = (
  day: number,
  month: number,
  year: number = new Date().getFullYear(),
) : number => {
  const eventdate = moment(`${month}/${day}/${year}`, 'MM/DD/YYYY');
  const todaysdate = moment();
  return eventdate.diff(todaysdate, 'days');
};

export default getDaysTo;
