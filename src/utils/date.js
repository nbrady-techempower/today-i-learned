const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

export const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
};

export const formatDateTime = (dateStr) => {
  const date = new Date(dateStr);
  return `${formatDate(dateStr)} ${date.getHours()}:${date.getMinutes()}`;
};
