import { commonAction } from '../types/common';
import { createContext } from './createContext';
import { FC } from 'react';
import { AppProps } from 'next/app';

export type themeType = {
  currentTheme: string;
};

export interface ThemeContext {
  state: themeType;
  dispatch: {
    [key: string]: Function;
  };
}

const themes = {
  currentTheme: 'dark',
};

const reducer = (state: themeType, action: commonAction): themeType => {
  switch (action.type) {
    case 'dark':
      return { ...state, currentTheme: 'dark' };
    case 'light':
    default:
      return { ...state, currentTheme: 'light' };
  }
};

const changeThemeTo = (dispatch: any) => (themeColor: string) => dispatch({ type: themeColor });

export const { Context, Provider } = createContext(reducer, { changeThemeTo }, themes);

interface HigherOrderComponentProps {
  themeContext: ThemeContext;
}

export const withTheme = (Component: FC<HigherOrderComponentProps>) => {
  return function contextComponent(props: AppProps) {
    return (
      <Context.Consumer>
        {(context) => <Component {...props} themeContext={context} />}
      </Context.Consumer>
    );
  };
};
