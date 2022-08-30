import { Heading } from '../../src/components/Heading';
import { render, screen } from '@testing-library/react';
import { fetchName } from '../../src/actions/fetchName';

jest.mock('../../src/actions/fetchName');

describe('Heading', () => {
  test('renders the component', async () => {
    const resolvedValue = { name: 'test' };
    fetchName.mockResolvedValue(resolvedValue);
    const props = {
      themeContext: {
        state: { currentTheme: 'testTheme' },
      },
    };
    render(<Heading {...props} />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Welcome to Next.js! ');
    expect(screen.getByTestId('currentTheme').textContent).toBe('testTheme');
    expect(fetchName).toHaveBeenCalled();
    const nameContainer = await screen.findByTestId('name');
    expect(nameContainer.textContent).toBe('test');
  });
});
