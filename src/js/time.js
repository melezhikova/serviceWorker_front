export default function getTime(data) {
  const time = new Date(data);
  let date = time.getDate();
  if (date < 10) {
    date = `0${date}`;
  }
  let month = time.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  const year = time.getFullYear();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return `${date}.${month}.${year} ${hours}:${minutes}`;
}
