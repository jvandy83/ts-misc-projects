export const dateStringToDate = (dateString: string): Date => {
  const [month, day, year] = dateString.split('/').map((n) => parseInt(n));
  return new Date(day, month - 1, year);
};
