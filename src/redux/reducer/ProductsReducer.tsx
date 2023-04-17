import {ADD_PRODUCT_CART} from '../action/Types';

const initialState = {
  //ProductData: [],
  selectedproducts: [],
};
const ProductReducer = (state = initialState, action: any) => {
  console.log('inreducer1', action);
  switch (action.type) {
    case ADD_PRODUCT_CART:
      console.log('inreducer', action);
      return {selectedproducts: action.payload};
    //return {selectedproducts: [...state.selectedproducts, action.payload]};

    default:
      return state;
  }
};
export default ProductReducer;
