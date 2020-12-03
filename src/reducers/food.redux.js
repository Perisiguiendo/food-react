import axios from 'axios'
import { CART_ADD, CART_MINUS, CART_CLEAR, GET_LIST } from '../action/actionType'
import { getFoodList, addItemCount, minusItemCount, clearItemCount, errorMsg } from '../action/action'

axios.defaults.baseURL = 'http://192.168.31.142:8000/order/api/'

const initFoodState = {
    food: [],
    checkedList: [],
    total: 0,  // 
}

function getClass(o) { //判断数据类型
    return Object.prototype.toString.call(o).slice(8, -1);
}

function deepCopy(obj) {
    var result, oClass = getClass(obj);
    if (oClass === "Object") result = {}; //判断传入的如果是对象，继续遍历
    else if (oClass === "Array") result = []; //判断传入的如果是数组，继续遍历
    else return obj; //如果是基本数据类型就直接返回

    for (var i in obj) {
        var copy = obj[i];
        if (getClass(copy) === "Object") result[i] = deepCopy(copy); //递归方法 ，如果对象继续变量obj[i],下一级还是对象，就obj[i][i]
        else if (getClass(copy) === "Array") result[i] = deepCopy(copy); //递归方法 ，如果对象继续数组obj[i],下一级还是数组，就obj[i][i]
        else result[i] = copy; //基本数据类型则赋值给属性
    }
    return result;
}

export const foodReducer = (state = initFoodState, action) => {
    // let newState = deepCopy(state);
    let data = action.payload;
    console.log('action', action);
    switch (action.type) {
        case GET_LIST:
            data.forEach(v => {
                v.food_count = 0;
            })
            return { ...state, food: data }
        case CART_ADD:
            console.log('旧的', state, action);
            state.food.forEach(item => {
                if (item.food_id === data.food_id) {
                    item.food_count += 1;
                }
            })
            console.log('新的', state);
            // let isExist = newState.checkedList.some(item => {
            //     return item.food_id === data.food_id;
            // })
            // console.log(isExist);
            // if (isExist) {
            //     newState.checkedList.forEach(item => {
            //         if (item.food_id === data.food_id) {
            //             item.food_count += 1;
            //         }
            //     })
            // } else {
            //     newState.checkedList.push(data);
            //     newState.checkedList.forEach(item => {
            //         if (item.food_id === data.food_id) {
            //             item.food_count += 1;
            //         }
            //     })
            // }
            return { ...state };
        case CART_MINUS:
            console.log(state, action);
            state.food.forEach(item => {
                if (item.food_id === data.food_id) {
                    item.food_count -= 1;
                }
            })
        // let isDeleted = -1;
        // newState.checkedList.forEach((item, index) => {
        //     if (item.food_id === data.food_id) {
        //         item.food_count -= 1;
        //         if (item.food_count === 0) {
        //             isDeleted = index;
        //         }
        //     }
        // })
        // if (isDeleted !== -1) {
        //     newState.checkedList.splice(isDeleted, 1);
        // }
        return {...state};
        case CART_CLEAR:
        // newState.data.forEach(item => {
        //     item.food_count = 0;
        // })
        // newState.checkedList.splice(0, newState.checkedList.length);
        // console.log(newState);
        // return newState;
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
