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
    switch (action.type) {
        case GET_LIST:
            data.forEach(v => {
                v.food_count = 0;
            })
            return { ...state, food: data }
        case CART_ADD:
            state.food.forEach(item => {
                if (item.food_id === data.food_id) {
                    item.food_count += 1;
                }
            })
            return { ...state, food: state.food };
        case CART_MINUS:
            state.food.forEach(item => {
                if (item.food_id === data.food_id) {
                    item.food_count -= 1;
                }
            })
            return { ...state };
        case CART_CLEAR:
        // newState.data.forEach(item => {
        //     item.food_count = 0;
        // })
        // newState.checkedList.splice(0, newState.checkedList.length);
        // console.log(newState);
        return {...state};
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
