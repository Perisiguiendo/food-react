import axios from 'axios'

import { CART_ADD, CART_MINUS, CART_CLEAR } from '../action/actionType'
import { getFoodList, addItemCount, minusItemCount, clearItemCount, errorMsg } from '../action/action'

const initFoodState = {
    data: [
        {
            "food_id": 1,
            "food_type": 1,
            "food_name": "红烧肉",
            "food_img": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3779575523,3340645051&fm=26&gp=0.jpg",
            "food_price": "10.50",
            "food_description": "上等猪肉",
            "food_discount": 10,
            "food_count": 0
        },
        {
            "food_id": 2,
            "food_type": 1,
            "food_name": "清蒸鱼",
            "food_img": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3779575523,3340645051&fm=26&gp=0.jpg",
            "food_price": "12.00",
            "food_description": "采用新鲜的鱼",
            "food_discount": 10,
            "food_count": 0
        },
        {
            "food_id": 3,
            "food_type": 2,
            "food_name": "炒青菜",
            "food_img": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3779575523,3340645051&fm=26&gp=0.jpg",
            "food_price": "8.00",
            "food_description": "无添加蔬菜",
            "food_discount": 10,
            "food_count": 0
        },
        {
            "food_id": 4,
            "food_type": 3,
            "food_name": "水果拼盘",
            "food_img": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3779575523,3340645051&fm=26&gp=0.jpg",
            "food_price": "15.00",
            "food_description": "各类水果",
            "food_discount": 10,
            "food_count": 0
        },
        {
            "food_id": 5,
            "food_type": 3,
            "food_name": "水果拼盘",
            "food_img": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3779575523,3340645051&fm=26&gp=0.jpg",
            "food_price": "15.00",
            "food_description": "各类水果",
            "food_discount": 10,
            "food_count": 0
        },
        {
            "food_id": 6,
            "food_type": 3,
            "food_name": "水果拼盘",
            "food_img": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3779575523,3340645051&fm=26&gp=0.jpg",
            "food_price": "15.00",
            "food_description": "各类水果",
            "food_discount": 10,
            "food_count": 0
        },
        {
            "food_id": 7,
            "food_type": 3,
            "food_name": "水果拼盘",
            "food_img": "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3779575523,3340645051&fm=26&gp=0.jpg",
            "food_price": "15.00",
            "food_description": "各类水果",
            "food_discount": 10,
            "food_count": 0
        }
    ],
    checkedList: [],
    total: 0,  // 
}

axios.defaults.baseURL = 'http://192.168.31.142:8000/order/api/'

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
    console.log('state', state);
    let newState = deepCopy(state);
    let data = action.data;
    console.log('action', action);
    console.log('newState', newState, 'data', data);
    switch (action.type) {
        case CART_ADD:
            newState.data.forEach(item => {
                if (item.food_id === data.food_id) {
                    item.food_count += 1;
                }
            })
            let isExist = newState.checkedList.some(item => {
                return item.food_id === data.food_id;
            })
            console.log(isExist);
            if (isExist) {
                newState.checkedList.forEach(item => {
                    if (item.food_id === data.food_id) {
                        item.food_count += 1;
                    }
                })
            } else {
                newState.checkedList.push(data);
                newState.checkedList.forEach(item => {
                    if (item.food_id === data.food_id) {
                        item.food_count += 1;
                    }
                })
            }
            return newState;
        case CART_MINUS:
            newState.data.forEach(item => {
                if (item.food_id === data.food_id) {
                    item.food_count -= 1;
                }
            })
            let isDeleted = -1;
            newState.checkedList.forEach((item, index) => {
                if (item.food_id === data.food_id) {
                    item.food_count -= 1;
                    if (item.food_count === 0) {
                        isDeleted = index;
                    }
                }
            })
            if (isDeleted !== -1) {
                newState.checkedList.splice(isDeleted, 1);
            }
            return newState;
        case CART_CLEAR:
            newState.data.forEach(item => {
                item.food_count = 0;
            })
            newState.checkedList.splice(0, newState.checkedList.length);
            console.log(newState);
            return newState;
        default:
            return newState;
    }
}

export function getList() {
    return dispatch => {
        axios.get('/food')
            .then(res => {
                if (res.status === 200) {
                    dispatch(getFoodList(res.data.results));
                }
            })
    }
}

