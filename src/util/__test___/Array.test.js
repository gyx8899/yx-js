import {averageOfNumbers, elementsAreEqual, maxElementsFromArray} from '../../index';

test('test', () => {
  expect(1).toBe(1);
});

describe.each([
  [[1, 2, 3, 4, 5], 1, [5], 'toStrictEqual'],
  [[2, 3, 4, 5, 6, 7], 2, [7, 6], 'toStrictEqual'],
])('maxElementsFromArray(%o, %i)', (param1, param2, expected, matcher = 'toBe', matcherNot) => {
  test(`${matcherNot ? 'not.' : ''}${matcher}(${expected})`, () => {
    if (!matcherNot) {
      expect(maxElementsFromArray(param1, param2))[matcher](expected);
    } else {
      expect(maxElementsFromArray(param1, param2)).not[matcher](expected);
    }
  });
});

describe.each([
  [[1, 2, 3, 4, 5], false],
  [[6, 6, 6, 6], true],
])('elementsAreEqual(%o)', (param1, expected, matcher = 'toBe', matcherNot) => {
  test(`${matcherNot ? 'not.' : ''}${matcher}(${expected})`, () => {
    if (!matcherNot) {
      expect(elementsAreEqual(param1))[matcher](expected);
    } else {
      expect(elementsAreEqual(param1)).not[matcher](expected);
    }
  });
});

describe.each([
  [[6, 7, 8], 7],
  [[6, 7, 8, 9], 7.5],
])('averageOfNumbers(%o)', (param1, expected, matcher = 'toBe', matcherNot) => {
  test(`${matcherNot ? 'not.' : ''}${matcher}(${expected})`, () => {
    if (!matcherNot) {
      expect(averageOfNumbers(...param1))[matcher](expected);
    } else {
      expect(averageOfNumbers(...param1)).not[matcher](expected);
    }
  });
});
