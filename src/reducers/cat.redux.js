import axios from 'axios'
import { GET_FOOD_CAT } from '../action/actionType'
import { getFoodCat } from '../action/action'

const initCatState = {
    food_cat: []
}

export const foodCat = (state = initCatState, action) => {
    switch (action.type) {
        case GET_FOOD_CAT:
            return { ...state, food_cat: action.payload }
        default:
            return state;
    }
}

export function getCat() {
    return dispatch => {
        axios.get('/foodcat/')
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data.results);
                    dispatch(getFoodCat(res.data.results));
                }
            })
    }
}
