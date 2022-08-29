import { createContext } from './createContext';

const themes = {
  currentTheme: 'dark',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dark':
      return { ...state, currentTheme: 'dark' };
    case 'light':
    default:
      return { ...state, currentTheme: 'light' };
  }
};

const changeThemeTo = (dispatch) => (themeColor) => dispatch({ type: themeColor });

export const { Context, Provider } = createContext(reducer, { changeThemeTo }, themes);

export function withTheme(Component) {
  return function contextComponent(props) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} themeContext={context} />}
      </Context.Consumer>
    );
  };
}
