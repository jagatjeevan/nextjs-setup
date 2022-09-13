import { Heading } from '../../src/components/Heading';
import { render, screen, waitFor } from '@testing-library/react';
import { fetchName } from '../../src/actions/fetchName';

jest.mock('../../src/actions/fetchName');
afterEach(() => {
  jest.resetAllMocks();
  jest.clearAllMocks();
});

describe('Heading', () => {
  const props = {
    themeContext: {
      state: { currentTheme: 'testTheme' },
    },
  };

  test('renders the component', async () => {
    const resolvedValue = { name: 'test' };
    fetchName.mockResolvedValue(resolvedValue);
    render(<Heading {...props} />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Welcome to Next.js! ');
    expect(screen.getByTestId('currentTheme').textContent).toBe('testTheme');
    expect(fetchName).toHaveBeenCalled();
    waitFor(async () => {
      const nameContainer = await screen.queryByTestId('name');
      expect(nameContainer.textContent).toBe('test');
    });
  });

  test('renders when unsuccessful fetchName', async () => {
    const rejectValue = { message: 'could not fetch' };
    fetchName.mockRejectedValue(rejectValue);
    render(<Heading {...props} />);
    expect(fetchName).toHaveBeenCalled();
    const nameContainer = await screen.findByTestId('errorMsg');
    expect(nameContainer.textContent).toBe('could not fetch');
  });
});
