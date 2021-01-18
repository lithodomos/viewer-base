import { unbox } from './unbox';

test('it unboxes an array item correctly', () => {
  expect(
    unbox<number>([1])
  ).toBe(1);

  expect(
    unbox<string>(['abc'])
  ).toBe('abc');

  expect(
    unbox<Object>([{ x: 1 }])
  ).toMatchObject({ x: 1 });
});

test('it returns the value unchanged if not an array', () => {
  expect(unbox<number>(1)).toBe(1);

  expect(unbox<string>('abc')).toBe('abc');

  expect(
    unbox<Object>({ x: 1 })
  ).toMatchObject({ x: 1 });
});
