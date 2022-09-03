import { isBrowser } from '../../src/utils/browser';

test('isBrowser', () => {
  expect(isBrowser).toBeTruthy();
});
