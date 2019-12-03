export const validResponse = arr => {
  // regex for one non-whitespace character
  const re = /(?=.*\w).{1,}/;
  return arr.every(curr => re.test(curr));
};
