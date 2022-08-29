import { Heading } from '../../src/components/Heading';
import { render, screen } from '@testing-library/react';

describe('Heading', () => {
  test('renders the component', () => {
    const props = {
      themeContext: {
        state: { currentTheme: 'testTheme' },
      },
    };
    render(<Heading {...props} />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Welcome to Next.js!');
    expect(screen.getByTestId('currentTheme').textContent).toBe('testTheme');
  });
});
