import {revertString} from '../String';

test('test', () => {
  expect(1).toBe(1);
});

describe.each([
  ['Medium', 'muideM'],
  ['Better Programing', 'gnimargorP retteB'],
])('revertString(%s)', (param1, expected, matcher = 'toBe', matcherNot) => {
  test(`test matcher: ${param1}.${matcher}(${expected})`, () => {
    if (!matcherNot) {
      expect(revertString(param1))[matcher](expected);
    } else {
      expect(revertString(param1)).not[matcher](expected);
    }
  });
});
