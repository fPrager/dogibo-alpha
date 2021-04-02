import moment from 'moment';

const getDaysTo = (
  day: number,
  month: number,
  year: number = new Date().getFullYear(),
) : number => {
  const eventdate = moment(`${month}/${day}/${year} 23:59:00`);
  const todaysdate = moment();
  return eventdate.diff(todaysdate, 'days');
};

export default getDaysTo;
