import { slideChange } from "../type"
export const slideChangeAction = (slide) => {
  return {
    type: slideChange,
    payload: slide
  }
}

