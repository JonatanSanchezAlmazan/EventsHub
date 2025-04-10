export function formatTime(startTime, endTime) {
  function formatSingleTime(time) {
    const parsedTime = time.split(':')[0];
    if (parsedTime > 0 && parsedTime < 11) {
      return `${time} AM`;
    } else {
      return `${time} PM`;
    }
  }

  const newStartTime = formatSingleTime(startTime.value);
  const newEndTime = formatSingleTime(endTime.value);

  return { newStartTime, newEndTime };
}
