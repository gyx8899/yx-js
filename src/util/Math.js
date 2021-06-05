export const isPrime = (number) => {
    if (number === 0 || number === 1) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

export const factorialOfNumber = (number) =>
    number < 0
        ? (() => {
              throw new Error(`No negative Number: ${number}`);
          })()
        : number <= 1
        ? 1
        : number * factorialOfNumber(number - 1);

export function hashCode(s) {
    return s.split("").reduce(function (a, b) {
        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
    }, 0);
}
