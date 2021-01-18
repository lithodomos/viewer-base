import {
  SCREEN_WIDTH_BREAK_EXTRA_LARGE,
  SCREEN_WIDTH_BREAK_LARGE,
  SCREEN_WIDTH_BREAK_MEDIUM,
  SCREEN_WIDTH_BREAK_SMALL,
  SCREEN_WIDTH_BREAK_EXTRA_SMALL,
  SCREEN_WIDTH_MAX,
  HEADER_HEIGHT,
  HEADER_WIDTH,
  HEADER_BUTTON_SIZE,
  ICON_BUTTON_SIZE,
} from './SIZES';

test('it matches the snapshot', () => {
  expect(SCREEN_WIDTH_BREAK_EXTRA_LARGE).toMatchSnapshot();
  expect(SCREEN_WIDTH_BREAK_LARGE).toMatchSnapshot();
  expect(SCREEN_WIDTH_BREAK_MEDIUM).toMatchSnapshot();
  expect(SCREEN_WIDTH_BREAK_SMALL).toMatchSnapshot();
  expect(SCREEN_WIDTH_BREAK_EXTRA_SMALL).toMatchSnapshot();
  expect(SCREEN_WIDTH_MAX).toMatchSnapshot();
  expect(HEADER_HEIGHT).toMatchSnapshot();
  expect(HEADER_WIDTH).toMatchSnapshot();
  expect(HEADER_BUTTON_SIZE).toMatchSnapshot();
  expect(ICON_BUTTON_SIZE).toMatchSnapshot();
});
