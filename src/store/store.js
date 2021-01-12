import {createStore, combineReducers} from 'redux'
import calculatorReducer from './Calculator/Calculator.reducer'
import productsReducer from './Products/Products.reducer';

const rootReducer = combineReducers({
    calculator: calculatorReducer,
    products: productsReducer
})
//cria store com base nos reducers combinados
const store = createStore(rootReducer)

export default store;