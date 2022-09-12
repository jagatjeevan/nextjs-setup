import React, { FC, useReducer } from 'react';
import { commonAction } from '../types/common';

export const createContext = (
  reducer: (state: any, action: commonAction) => {},
  actions: { [key: string]: Function },
  initialState: any,
) => {
  const Context = React.createContext(initialState);
  const Provider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatchActions] = useReducer(reducer, initialState);

    const boundActions: { [key: string]: Function } = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatchActions);
    }

    return (
      <Context.Provider value={{ state, dispatch: boundActions }}>{children}</Context.Provider>
    );
  };

  return { Context, Provider };
};
