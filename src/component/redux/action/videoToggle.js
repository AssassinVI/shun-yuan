import { videoStart, videoStop } from "../type"
export const playVideo = () => {
    return {
        type: videoStart,
        payload: true
    }
}
export const closeVideo = () => {
    return {
        type: videoStop,
        payload: false
    }
}