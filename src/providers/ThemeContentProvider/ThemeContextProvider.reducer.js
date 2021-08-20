import { SET_THEME } from './ThemeContextProvider.types';
import themes from '../../theme/themes';

// default state for useContext
export const defaultState = { theme: themes.light };

export const themeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: themes[action.payload],
      };
    default: {
      return state;
    }
  }
};
