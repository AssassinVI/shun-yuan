import { toggleEquipment } from "../type"
export const toggleEquipmentAction = (index) => {
    return {
        type: toggleEquipment,
        payload: index
    }
}
