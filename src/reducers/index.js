import { combineReducers } from 'redux';
import ModalReducer from './modal';
import StockReducer from './stock';
import UserReducer from './user';

export default combineReducers({
  modal: ModalReducer,
  user: UserReducer,
  stock: StockReducer,
});
