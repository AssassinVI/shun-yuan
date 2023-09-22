import { chooseFloor } from "../type";

const initialState = {
    floor: null
}
// 這部分和useReducer hook是一樣的
export const floorReducer = (state = initialState, action) => {
    switch (action.type) {
        case chooseFloor:
            return {
                ...state,
                floor: action.payload
            }

        default:
            return state;
    }
}

