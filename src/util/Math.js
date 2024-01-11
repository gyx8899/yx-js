export const isPrime = (number) => {
    if (number === 0 || number === 1) {
        return true;
    }
    // eslint-disable-next-line no-plusplus
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

export const factorialOfNumber = (number) =>
    // eslint-disable-next-line no-nested-ternary, implicit-arrow-linebreak
    (number < 0
        ? (() => {
              throw new Error(`No negative Number: ${number}`);
          })()
        : number <= 1
        ? 1
        : number * factorialOfNumber(number - 1));

export function hashCode(s) {
    return s.split('').reduce((a, b) => {
        // eslint-disable-next-line no-bitwise, no-param-reassign
        a = (a << 5) - a + b.charCodeAt(0);
        // eslint-disable-next-line no-bitwise
        return a & a;
    }, 0);
}
