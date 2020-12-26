export const formatDate = (date) => {
  const dateObj = new Date(date);

  let hours = dateObj.getHours();
  let minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';
  minutes = minutes < 10 ? '0' + minutes : minutes;

  const todayOrYesterday =
    dateObj.getDate() < new Date().getDate() ? 'Yesterday' : 'Today';

  // console.log(new Date().getDate(), dateObj.getDate());

  const strTime = hours + ':' + minutes + ' ' + ampm;
  return `${todayOrYesterday} ${strTime}`;
};
