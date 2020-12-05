import axios from 'axios'
import { CART_ADD, CART_MINUS, CART_CLEAR, GET_LIST } from '../action/actionType'
import { getFoodList, addItemCount, minusItemCount } from '../action/action'

axios.defaults.baseURL = 'http://118.202.42.250:8000/order/api/'

const initFoodState = {
    food: [],
}

export const foodReducer = (state = initFoodState, action) => {
    let data = action.payload;
    console.log('action', action);
    let newList = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case GET_LIST:
            data.forEach(v => {
                v.food_count = 0;
            })
            return { ...newList, food: data }
        case CART_ADD:
            newList.food.forEach(item => {
                if (item.food_id === data.food_id) {
                    item.food_count += 1;
                }
                // state.totalPrice += parseFloat(item.food_count) * parseFloat(item.food_price);
            })
            return newList;
        case CART_MINUS:
            newList.food.forEach(item => {
                if (item.food_id === data.food_id) {
                    item.food_count -= 1;
                }
                // state.totalPrice -= item.foods_count * item.food_price;
            })
            return newList;
        case CART_CLEAR:
            // newState.data.forEach(item => {
            //     item.food_count = 0;
            // })
            // newState.checkedList.splice(0, newState.checkedList.length);
            // console.log(newState);
            return { ...state };
        default:
            return state;
    }
}

export function getList() {
    return dispatch => {
        axios.get('/food/')
            .then(res => {
                if (res.status === 200) {
                    dispatch(getFoodList(res.data.results))
                }
            })
    }
}

export function addItem(data) {
    return dispatch => {
        dispatch(addItemCount(data))
    }
}

export function minusItem(data) {
    return dispatch => {
        dispatch(minusItemCount(data))
    }
}
