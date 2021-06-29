import {createStore, combineReducers,applyMiddleware} from 'redux';
import categories from './categories';
import products from './products'
import cart from './cart'
import thunk from 'redux-thunk'


let reducers = combineReducers({categories,products,cart});
const store = () => {
    return createStore(reducers,applyMiddleware(thunk))
}

export default store();