import { themeReducer, defaultState } from './themeReducer';
import { SET_THEME } from './themeTypes';
import themes from '../../theme/themes';

describe('themeReducer', () => {
  it('should perform action: SET_THEME correctly to light theme', () => {
    const action = { type: SET_THEME, payload: 'light' };
    const expectedState = {
      ...defaultState,
      theme: themes.light,
    };

    expect(themeReducer(undefined, action)).toEqual(expectedState);
  });

  it('should perform action: SET_THEME correctly to dark theme ', () => {
    const action = { type: SET_THEME, payload: 'dark' };
    const expectedState = {
      ...defaultState,
      theme: themes.dark,
    };

    expect(themeReducer(undefined, action)).toEqual(expectedState);
  });
});
