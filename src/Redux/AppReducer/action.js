import { 
     MEN_CLOTHING_FAILURE,
     MEN_CLOTHING_LOADING,
     MEN_CLOTHING_SUCCESS,
     MEN_SHOES_FAILURE,
     MEN_SHOES_LOADING,
     MEN_SHOES_SUCCESS,
     WOMEN_CLOTHING_FAILURE,
     WOMEN_CLOTHING_LOADING,
     WOMEN_CLOTHING_SUCCESS,
     WOMEN_SHOES_FAILURE,
     WOMEN_SHOES_LAODING,
     WOMEN_SHOES_SUCCESS
     } from "./actionType"

// Actions For MenClothing Data
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

// Actions For MenShoes Data
export const menShoesLoadingFunction = () => {
    return {
        type : MEN_SHOES_LOADING
    }
}
export const menShoesFailureFunction = () => {
    return {
        type : MEN_SHOES_FAILURE
    }
}
export const menShoesSuccessFunction = (payload) => {
    return {
        type : MEN_SHOES_SUCCESS,
        payload
    }
}

// Actions For Women_Clothing Data;
export const womenClothingLoadingFunction = () => {
    return {
        type : WOMEN_CLOTHING_LOADING
    }
}
export const womenClothingFailureFunction = () => {
    return {
        type : WOMEN_CLOTHING_FAILURE
    }
}
export const womenClothingSuccessFunction = (payload) => {
    return {
        type : WOMEN_CLOTHING_SUCCESS,
        payload
    }
}
// Actions for Women_Shoes Data
export const womenShoesLoadingFunction = () => {
    return {
        type : WOMEN_SHOES_LAODING
    }
}
export const womenShoesErrorFunction = () => {
    return {
        type : WOMEN_SHOES_FAILURE
    }
}
export const womenShoesSuccessFunction = (payload) => {
    return {
        type : WOMEN_SHOES_SUCCESS,
        payload
    }
}
