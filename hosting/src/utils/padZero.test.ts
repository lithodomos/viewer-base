import { padZero } from './padZero';

test('it pads zeros correctly', () => {
  expect(padZero('')).toBe('00');
  expect(padZero('1')).toBe('01');
  expect(padZero('11')).toBe('11');
  expect(padZero('11', 4)).toBe('0011');
  expect(padZero('12345', 4)).toBe('12345');
});
