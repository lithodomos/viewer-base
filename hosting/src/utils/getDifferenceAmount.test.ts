import { getDifferenceAmount } from './getDifferenceAmount';

test('it correctly calculates the difference', () => {
  expect(getDifferenceAmount(10, 5)).toBe(5);
  expect(getDifferenceAmount(6.99, 5.24)).toBe(1.75);
  expect(getDifferenceAmount(0.3, 0.1)).toBe(0.2);
});
