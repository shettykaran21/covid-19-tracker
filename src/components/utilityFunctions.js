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

export const formatNumber = (num) => {
  num = num.toString();
  let afterPoint = '';
  if (num.indexOf('.') > 0) {
    afterPoint = num.substring(num.indexOf('.'), num.length);
  }
  num = Math.floor(num);
  num = num.toString();
  let lastThree = num.substring(num.length - 3);
  let otherNumbers = num.substring(0, num.length - 3);
  if (otherNumbers !== '') {
    lastThree = ',' + lastThree;
  }
  let res =
    otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + afterPoint;

  return res;
};

export const convertToInteger = (str) => {
  const newStr = str.replace(/,/g, '-');
  return newStr;
};
