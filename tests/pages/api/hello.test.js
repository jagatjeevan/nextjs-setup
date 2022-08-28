import hello from '../../../src/pages/api/hello';

const statusMock = jest.fn();
const jsonMock = jest.fn();

test('/api/hello', () => {
  const req = { method: 'GET' };
  const res = { status: statusMock };
  statusMock.mockReturnValue({ json: jsonMock });
  hello(req, res);
  expect(statusMock).toHaveBeenCalledWith(200);
  expect(jsonMock).toHaveBeenCalledWith({
    name: 'John Doe',
  });
});
