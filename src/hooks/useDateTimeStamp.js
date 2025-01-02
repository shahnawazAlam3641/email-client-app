const useDateTimeStamp = (timestamp) => {
  const date = new Date(timestamp);
  const day = String(date.getDate());
  const month = String(date.getMonth() + 1);
  const year = date.getFullYear();
  let hours = String(date.getHours());
  const minutes = String(date.getMinutes());

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  hours = String(hours);
  const formattedDate = `${day}/0${month}/${year} ${hours}:${minutes} ${ampm}`;
  return formattedDate;
};

export default useDateTimeStamp;
