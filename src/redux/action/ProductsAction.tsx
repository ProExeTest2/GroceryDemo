import {ADD_PRODUCT_CART} from './Types';

export const AddProductCartAction =
  (product: any, totalvalue: any) => async (dispatch: any) => {
    console.log('inaction', product);
    dispatch({type: ADD_PRODUCT_CART, payload: product});
  };
