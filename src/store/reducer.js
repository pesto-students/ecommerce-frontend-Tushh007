import { LOCALES } from '../utils/i18n';

export const initialState = {
  locale: LOCALES.ENGLISH,
  user: null,
};

export const actionTypes = {
  SET_LOCALE: 'SET_LOCALE',
};

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case actionTypes.SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };
    default:
      return state;
  }
};

export default reducer;
