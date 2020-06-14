export const numberConvertToArray = (number) => ([...`${number}`].map((num) => num / 1));

export const isNumberPowerOfTwo = (number) => {
  if (number !== undefined && number !== null) {
    // eslint-disable-next-line no-bitwise
    return (number & (number - 1)) === 0;
  }
  return false;
};
