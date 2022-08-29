import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/index';

jest.mock('../../src/components/Heading', () => () => 'ComponentToMock');

describe('Home', () => {
  test('renders the component', () => {
    render(<Home />);
    expect(screen.getByText('ComponentToMock')).toBeInTheDocument;
  });
});
