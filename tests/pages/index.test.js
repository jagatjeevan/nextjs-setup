import { render, screen } from '@testing-library/react';
import Home, { getStaticProps } from '../../src/pages/index';

jest.mock('../../src/components/Heading', () => () => 'ComponentToMock');

describe('Home', () => {
  test('renders the component', () => {
    render(<Home />);
    expect(screen.getByText('ComponentToMock')).toBeInTheDocument;
  });

  test('getStaticProps', async () => {
    const props = await getStaticProps();
    const expectedProps = { props: { envValues: { SECRET_KEY: '1234567890' } } };
    expect(props).toStrictEqual(expectedProps);
  });
});
