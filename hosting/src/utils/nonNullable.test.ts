import { nonNullable } from './nonNullable';

test('it ascertains nonnullable inputs correctly', () => {
  expect(nonNullable(null)).toBe(false);
  expect(nonNullable(undefined)).toBe(false);
  expect(nonNullable({})).toBe(true);
});
