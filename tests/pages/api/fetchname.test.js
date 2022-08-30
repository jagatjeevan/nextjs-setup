import fetchName from '../../../src/pages/api/fetchname';

const statusMock = jest.fn();
const jsonMock = jest.fn();

test('/api/fetchname', () => {
  const req = { method: 'GET' };
  const res = { status: statusMock };
  statusMock.mockReturnValue({ json: jsonMock });
  fetchName(req, res);
  expect(statusMock).toHaveBeenCalledWith(200);
  expect(jsonMock).toHaveBeenCalledWith({
    name: 'John Doe',
  });
});
