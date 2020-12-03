import {
    CART_ADD,
    CART_MINUS,
    CART_CLEAR,
    GET_LIST,
    GET_FOOD_CAT,
    ERROR_MSG
} from './actionType';

export function getFoodList(data) {
    return { type: GET_LIST, data }
}

export function getFoodCat(data){
    return { type: GET_FOOD_CAT, data }
}

export function addItemCount(data) {
    return { type: CART_ADD, data }
}

export function minusItemCount(data) {
    return { type: CART_MINUS, data }
}

export function clearItemCount(data) {
    return { type: CART_CLEAR, data }
}

export function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}
