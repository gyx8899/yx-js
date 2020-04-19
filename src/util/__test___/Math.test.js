import {factorialOfNumber} from '../../index';

test('test', () => {
  expect(1).toBe(1);
});

describe.each([
  [4, 24],
  [4, 6, undefined, true],
  [8, 40320],
])('factorialOfNumber(%i)', (param1, expected, matcher = 'toBe', matcherNot) => {
  test(`${matcherNot ? 'not.' : ''}${matcher}(${expected})`, () => {
    if (!matcherNot) {
      expect(factorialOfNumber(param1))[matcher](expected);
    } else {
      expect(factorialOfNumber(param1)).not[matcher](expected);
    }
  });
});
