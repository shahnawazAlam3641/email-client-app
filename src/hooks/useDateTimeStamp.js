const useDateTimeStamp = (timestamp) => {
  const date = new Date(timestamp);
  const day = String(date.getDate());
  const month = String(date.getMonth() + 1);
  const year = date.getFullYear();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const formattedDate = `${day}/0${month}/${year} ${hours}:${minutes}`;
  return formattedDate;
};

export default useDateTimeStamp;
