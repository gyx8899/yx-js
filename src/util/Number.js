export const numberConvertToArray = (number) => {
  return [...`${number}`].map((num) => num / 1);
};

export const isNumberPowerOfTwo = (number) => {
  // eslint-disable-next-line no-bitwise
  return !!number && (number & (number - 1)) === 0;
};
