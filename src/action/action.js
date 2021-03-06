import {
    CART_ADD,
    CART_MINUS,
    CART_CLEAR,
    GET_LIST,
    GET_FOOD_CAT,
    ERROR_MSG,
    SUBMIT_SUCCESS
} from './actionType';

export function getFoodList(data) {
    return { type: GET_LIST, payload: data }
}

export function getFoodCat(data) {
    return { type: GET_FOOD_CAT, payload: data }
}

export function addItemCount(data) {
    return { type: CART_ADD, payload: data }
}

export function minusItemCount(data) {
    return { type: CART_MINUS, payload: data }
}

export function clearItemCount(data) {
    return { type: CART_CLEAR, payload: data }
}

export function errorMsg(msg) {
    return { msg, type: ERROR_MSG }
}

export function submitSuccess(data) {
    return { type: SUBMIT_SUCCESS, payload: data }
}
