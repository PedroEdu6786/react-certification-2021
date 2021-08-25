import { SET_THEME } from './ThemeContextProvider.types';

export const setThemeAction = (value) => {
  return {
    type: SET_THEME,
    payload: value,
  };
};
