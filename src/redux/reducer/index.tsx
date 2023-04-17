import {combineReducers} from 'redux';
import ProductReducer from './ProductsReducer';

const appReducer = combineReducers({
  product: ProductReducer,
});

export default rootReducer = (state: any, action: any) => {
  //   if (action.type === CLEAR_ALL) {
  //     state = undefined;
  //   }
  return appReducer(state, action);
};
