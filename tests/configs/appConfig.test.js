import { getAllConfig, getConfig, setConfig, setInitialConfig } from '../../src/configs/appConfig';

test('appConfig', () => {
  expect(getConfig()).toBe('');
  expect(getAllConfig()).toStrictEqual({});
  setInitialConfig({ a: 1, b: 2 });
  expect(getAllConfig()).toStrictEqual({ a: 1, b: 2 });
  setConfig('a', 3);
  expect(getAllConfig()).toStrictEqual({ a: 3, b: 2 });
});
