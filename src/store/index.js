import {createStore, combineReducers} from 'redux';
import categories from './categories';
import products from './products'
import cart from './cart'


let reducers = combineReducers({categories,products,cart});
const store = () => {
    return createStore(reducers)
}

export default store();