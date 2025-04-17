export function isPastDate(inputDate) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const eventDate = new Date(inputDate);
  eventDate.setHours(0, 0, 0, 0);

  return eventDate < today;
}
