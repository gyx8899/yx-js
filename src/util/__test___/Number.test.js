import {isNumberPowerOfTwo, numberConvertToArray} from '../../index';

test('test', () => {
  expect(1).toBe(1);
});

describe.each([
  [1234, [1, 2, 3, 4], 'toStrictEqual'],
  [1234, [1, 2, 3, 5], 'toStrictEqual', true],
])('numberConvertToArray(%i)', (param1, expected, matcher = 'toBe', matcherNot) => {
  test(`${matcherNot ? 'not.' : ''}${matcher}(${expected})`, () => {
    if (!matcherNot) {
      expect(numberConvertToArray(param1))[matcher](expected);
    } else {
      expect(numberConvertToArray(param1)).not[matcher](expected);
    }
  });
});

describe.each([
  [100, false],
  [128, true],
])('isNumberPowerOfTwo(%i)', (param1, expected, matcher = 'toBe', matcherNot) => {
  test(`${matcherNot ? 'not.' : ''}${matcher}(${expected})`, () => {
    if (!matcherNot) {
      expect(isNumberPowerOfTwo(param1))[matcher](expected);
    } else {
      expect(isNumberPowerOfTwo(param1)).not[matcher](expected);
    }
  });
});
