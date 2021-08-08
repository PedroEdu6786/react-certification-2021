import { SET_LIGHT_THEME, SET_DARK_THEME } from './themeTypes';
import themes from '../../theme/themes';

export const themeReducer = (state, action) => {
  switch (action.type) {
    case SET_LIGHT_THEME:
      return {
        ...state,
        theme: themes.light,
      };

    case SET_DARK_THEME:
      return {
        ...state,
        theme: themes.dark,
      };
    default: {
      return state;
    }
  }
};
