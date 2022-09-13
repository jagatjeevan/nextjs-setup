import MockAxios from 'jest-mock-axios';
import axios from 'axios';
import { fetchName } from '../../src/actions/fetchName';
import { url } from '../../src/configs/apiEndPoint';

describe('fetchName', () => {
  afterEach(() => {
    MockAxios.reset();
    jest.resetAllMocks();
    jest.clearAllMocks();
  });

  test('fetches the name', () => {
    fetchName().then(() => {
      expect(axios.post).toHaveBeenCalledWith(`${url.baseUrl}/fetchname`);
    });
  });
});
