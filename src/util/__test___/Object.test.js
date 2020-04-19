import {keyValuePairsToArray} from '../../index';

test('test', () => {
  expect(1).toBe(1);
});

describe.each([
  [{a: 1, b: 'bb'}, [['a', 1], ['b', 'bb']], 'toStrictEqual'],
])('keyValuePairsToArray(%i)', (param1, expected, matcher = 'toBe', matcherNot) => {
  test(`${matcherNot ? 'not.' : ''}${matcher}(${expected})`, () => {
    if (!matcherNot) {
      expect(keyValuePairsToArray(param1))[matcher](expected);
    } else {
      expect(keyValuePairsToArray(param1)).not[matcher](expected);
    }
  });
});
