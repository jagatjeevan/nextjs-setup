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

  test('fetches the name successfully', () => {
    axios.post.mockResolvedValue({ data: 'test' });
    fetchName().then((res) => {
      expect(axios.post).toHaveBeenCalledWith(`${url.baseUrl}/fetchname`);
      expect(res).toBe('test');
    });
  });

  test('returns error for unsuccessful', () => {
    const mockError = { data: 'error' };
    axios.post.mockRejectedValueOnce(mockError);
    fetchName().catch((res) => {
      expect(axios.post).toHaveBeenCalledWith(`${url.baseUrl}/fetchname`);
      expect(res).toBe(mockError);
    });
  });
});
