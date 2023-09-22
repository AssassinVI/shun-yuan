import { slideChange } from "../type";

const initialState = {
    slide: -1,

}
// 這部分和useReducer hook是一樣的
export const slideReducer = (state = initialState, action) => {
    switch (action.type) {
        case slideChange:
            return {
                ...state,
                slide: action.payload

            }

        default:
            return state;
    }
}

