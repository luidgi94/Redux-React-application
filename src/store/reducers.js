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
  myGithub: 'https://github.com/luidgi94/Redux-React-application'
  
};

const shopReducer = (state = etatInitialStore, action) => {
  let miseAJourPanier;
  let updatedItemIndex;
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      miseAJourPanier = [...state.cart];
      updatedItemIndex = miseAJourPanier.findIndex(
        item => item.id === action.payload.id
      );

      if (updatedItemIndex < 0) {
        miseAJourPanier.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...miseAJourPanier[updatedItemIndex]
        };
        updatedItem.quantity++;
        miseAJourPanier[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: miseAJourPanier };
    case REMOVE_PRODUCT_FROM_CART:
      miseAJourPanier = [...state.cart]; // correspond à initialState.card
      updatedItemIndex = miseAJourPanier.findIndex(
        item => item.id === action.payload
      );
      const updatedItem = {
        ...miseAJourPanier[updatedItemIndex]
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        miseAJourPanier.splice(updatedItemIndex, 1);
      } else {
        miseAJourPanier[updatedItemIndex] = updatedItem;
      }
      return { ...state, cart: miseAJourPanier };
      
    case ADD_PRODUCT_FROM_CART:
      miseAJourPanier = [...state.cart]; // correspond à initialState.card
      updatedItemIndex = miseAJourPanier.findIndex(
        item => item.id === action.payload
      );
      const updatedItemC = {
        ...miseAJourPanier[updatedItemIndex]
      };
      updatedItemC.quantity++;
      miseAJourPanier[updatedItemIndex] = updatedItemC;
      return { ...state, cart: miseAJourPanier };
      
    default:
      return state;
  }
};

export default shopReducer;
