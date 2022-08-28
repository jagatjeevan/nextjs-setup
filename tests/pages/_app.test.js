import { render, screen } from '@testing-library/react';
import MyApp from '../../src/pages/_app';

describe('_app', () => {
  test('renders the component', () => {
    const props = {
      Component: () => <>Dummy Component</>,
      pageProps: {},
    };
    render(<MyApp {...props} />);
    expect(screen.getByText('Dummy Component')).toBeInTheDocument();
  });
});
