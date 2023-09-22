import { videoStart, videoStop } from "../type";

const initialState = {
    flag: true,

}
// 這部分和useReducer hook是一樣的
export const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case videoStart:
            return {
                ...state,
                flag: action.payload

            }

        case videoStop:
            return {
                ...state,
                flag: action.payload

            }

        default:
            return state;
    }
}