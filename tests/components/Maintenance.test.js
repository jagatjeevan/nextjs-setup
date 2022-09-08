import { render, screen } from '@testing-library/react';
import Maintenance from '../../src/components/Maintenance';
import { labels } from '../../src/configs/labels';

describe('Maintenance', () => {
  test('renders the component', () => {
    render(<Maintenance />);
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(labels.maintainence.heading);
    expect(screen.getByText(labels.maintainence.para)).toBeInTheDocument;
  });
});
