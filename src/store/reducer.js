import { LOCALES } from '../utils/i18n';

export const initialState = {
  locale: LOCALES.ENGLISH,
  user: null,
  cart: [],
  wishlist: [],
};

export const actionTypes = {
  SET_LOCALE: 'SET_LOCALE',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  EMPTY_CART: 'EMPTY_CART',
  SET_USER: 'SET_USER',
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(state, action);

  switch (action.type) {
    case actionTypes.SET_LOCALE:
      return {
        ...state,
        locale: action.locale,
      };
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case actionTypes.REMOVE_FROM_CART:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in cart!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.EMPTY_CART:
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
