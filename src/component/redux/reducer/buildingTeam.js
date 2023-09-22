import { anchorBuildingTeam } from "../type";

const initialState = {
    flag: true,
    team: "type1"
}
// 這部分和useReducer hook是一樣的
export const teamReducer = (state = initialState, action) => {
    switch (action.type) {
        case anchorBuildingTeam:
            return {
                ...state,
                flag: !state.flag,
                team: action.payload
            }

        default:
            return state;
    }
}

