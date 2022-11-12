import { MEN_CLOTHING_FAILURE, MEN_CLOTHING_LOADING, MEN_CLOTHING_SUCCESS } from "./actionType"

export const menClothingLoadingFunction = () => {
    return {
        type : MEN_CLOTHING_LOADING
    }
}
export const menClothingFailureFunction = () => {
    return {
        type : MEN_CLOTHING_FAILURE
    }
}
export const menClothingSuccessFunction = (payload) => {
    return {
        type : MEN_CLOTHING_SUCCESS,payload
    }
}