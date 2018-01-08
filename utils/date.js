export const calculateDaysBetween = (from, to) => {
  const fromDate = new Date(from);
  const toDate = new Date(to);
  fromDate.setHours(
    toDate.getHours(),
    toDate.getMinutes(),
    toDate.getSeconds(),
    toDate.getMilliseconds()
  );
  const timestampBetween = Math.abs(fromDate.getTime() - toDate.getTime());
  return Math.floor(timestampBetween / (1000 * 60 * 60 * 24));
};
