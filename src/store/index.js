import { combineReducers } from 'redux'
import { foodReducer } from '../reducers/food.redux'
import { foodCat } from '../reducers/cat.redux'

export default combineReducers({
    foodReducer,
    foodCat
})