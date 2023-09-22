import { toggleEquipment } from "../type";

const initialState = {
    index: 0
}
// 這部分和useReducer hook是一樣的
export const fifthPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case toggleEquipment:
            return {
                ...state,
                index: action.payload
            }

        default:
            return state;
    }
}

