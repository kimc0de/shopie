import {createStore, combineReducers, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {cartItems} from '../features/cart/reducers';

const reducers = combineReducers({
  cartItems: cartItems,
});

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware())
)
