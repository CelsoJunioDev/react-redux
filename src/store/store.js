import {createStore, combineReducers} from 'redux'
import calculatorReducer from './Calculator/Calculator.reducer'

const rootReducer = combineReducers({
    calculator: calculatorReducer
})
//cria store com base nos reducers combinados
const store = createStore(rootReducer)

export default store;