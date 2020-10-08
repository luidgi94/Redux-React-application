export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'; // Importation dans le reducer
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODCUT_FROM_CART';
export const ADD_PRODUCT_FROM_CART = 'ADD_PRODUCT_FROM_CART';

export const addProductToCart = product => {// Importation dans le le composant  
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product
      });
    }, 100);
  };
};

export const removeProductFromCart = productId => {
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: REMOVE_PRODUCT_FROM_CART,
          payload: productId
        });
      }, 100);
    };
  };

  export const addProductFromCart = productId => {
    return dispatch => {
      setTimeout(() => {
        dispatch({
          type: ADD_PRODUCT_FROM_CART,
          payload: productId
        });
      }, 100);
    };
  };
