import { Provider, withTheme } from '../../src/context/themeContext';
import { render, screen, fireEvent } from '@testing-library/react';
import { useEffect, useState } from 'react';

const TestStateOfComponent = (props) => {
  const [theme, setTheme] = useState(props.themeContext.state.currentTheme);

  useEffect(() => {
    setTheme(props.themeContext.state.currentTheme);
  }, [props.themeContext]);

  const changeTheme = () => {
    if (theme === 'dark') return props.themeContext.dispatch.changeThemeTo('light');
    return props.themeContext.dispatch.changeThemeTo('dark');
  };

  return (
    <>
      <h1>{theme}</h1>
      <button type="button" onClick={changeTheme}>
        Change theme
      </button>
    </>
  );
};

const WithThemeContext = withTheme(TestStateOfComponent);

describe('Theme Provider', () => {
  test('checks the state', async () => {
    render(
      <Provider>
        <WithThemeContext />
      </Provider>,
    );
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('dark');
    const button = screen.getByText(/Change theme/i);
    expect(button).toBeInTheDocument;
    fireEvent.click(button);
    let heading = await screen.findByRole('heading', { level: 1 });
    await expect(heading.textContent).toBe('light');
    fireEvent.click(button);
    heading = await screen.findByRole('heading', { level: 1 });
    await expect(heading.textContent).toBe('dark');
  });
});
