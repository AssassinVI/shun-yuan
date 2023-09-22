import { chooseFloor } from "../type"
export const selectFloor = (floor) => {
    return {
        type: chooseFloor,
        payload: floor
    }
}

