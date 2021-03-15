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
  ADD_TO_WISHLIST: 'ADD_TO_WISHLIST',
  REMOVE_FROM_WISHLIST: 'REMOVE_FROM_WISHLIST',
  EMPTY_WISHLIST: 'EMPTY_WISHLIST',
  SET_USER: 'SET_USER',
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => {
    console.log(item.price + amount);
    return item.price + amount;
  }, 0);

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
        cart: [...state.cart, action.item],
      };
    case actionTypes.REMOVE_FROM_CART:
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in cart!`
        );
      }
      return {
        ...state,
        cart: newCart,
      };

    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: [],
      };

    case actionTypes.ADD_TO_WISHLIST:
      return {
        ...state,
        wishlist: [...state.wishlist, action.item],
      };

    case actionTypes.REMOVE_FROM_WISHLIST:
      const wishlistIndex = state.wishlist.findIndex(
        (wishlistItem) => wishlistItem.id === action.id
      );
      let newWishlist = [...state.wishlist];
      if (wishlistIndex >= 0) {
        newWishlist.splice(wishlistIndex, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in wishlist!`
        );
      }
      return {
        ...state,
        wishlist: newWishlist,
      };

    case actionTypes.EMPTY_WISHLIST:
      return {
        ...state,
        wishlist: [],
      };

    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
