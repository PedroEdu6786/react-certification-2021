import { themeReducer, defaultState } from './ThemeContextProvider.reducer';
import { SET_THEME } from './ThemeContextProvider.types';
import themes from '../../theme/themes';
import { setThemeAction } from './ThemeContextProvider.actions';

describe('ThemeContextProvider', () => {
  const testLightAction = { type: SET_THEME, payload: 'light' };
  const testDarkAction = { type: SET_THEME, payload: 'dark' };

  describe('themeActions', () => {
    it('should receive action: { type: SET_THEME, payload: value }', () => {
      const action = setThemeAction('light');

      expect(action).toEqual(testLightAction);
    });
  });

  describe('themeReducer', () => {
    it('should perform action: SET_THEME correctly to light theme', () => {
      const expectedState = {
        ...defaultState,
        theme: themes.light,
      };

      expect(themeReducer(undefined, testLightAction)).toEqual(expectedState);
    });

    it('should perform action: SET_THEME correctly to dark theme ', () => {
      const expectedState = {
        ...defaultState,
        theme: themes.dark,
      };

      expect(themeReducer(undefined, testDarkAction)).toEqual(expectedState);
    });

    it('should perform action: default return state ', () => {
      const expectedState = { theme: themes.light };

      expect(themeReducer(undefined, { type: 'DEFAULT' })).toEqual(expectedState);
    });
  });
});
