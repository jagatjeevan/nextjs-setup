import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/index';

describe('Home', () => {
  test('renders the component', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Welcome to Next.js!');
  });
});
