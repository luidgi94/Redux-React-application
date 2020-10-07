import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, ADD_PRODUCT_FROM_CART } from './actions'; // J'importe toutes les actions qui agissent sur le store

const etatInitialStore = {
  products: [
    { id: 'p1', title: 'Halo Infinite', price: 69.99 },
    { id: 'p2', title: 'Livre "React-Redux pour les nuls"', price: 9.99 },
    { id: 'p3', title: 'Tropico (canette)', price: 0.99 },
    { id: 'p4', title: 'Télé 8k QLED', price: 2499.99 },
    { id: 'p5', title: 'PS5', price: 499.99 },
    { id: 'p6', title: 'XBOX SERIES X', price: 499.99 }
  ],
  cart: [],
  myGithub: 'https://github.com/luidgi94',
  
};

const shopReducer = (state = etatInitialStore, action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex]
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart]; // correspond à initialState.card
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: updatedCart };
      
    case ADD_PRODUCT_FROM_CART:
      updatedCart = [...state.cart]; // correspond à initialState.card
      updatedItemIndex = updatedCart.findIndex(
        item => item.id === action.payload
      );
      const updatedItemC = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItemC.quantity++;
      updatedCart[updatedItemIndex] = updatedItemC;
      return { ...state, cart: updatedCart };
      
    default:
      return state;
  }
};

export default shopReducer;
