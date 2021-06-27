import {createStore, combineReducers} from 'redux';
import categories from './categories';
import products from './products'


let reducers = combineReducers({categories,products});
const store = () => {
    return createStore(reducers)
}

export default store();