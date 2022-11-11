import { ISAUTH } from "./actionType";

const initState = {
    loginData : [],
    loginLoading : false,
    loginError : false,
    isAuth : false
}

export const reducer = (state=initState,{type,payload}) => {
    switch(type) {
        case ISAUTH : {
            return {
                ...state,
                isAuth : true
            }
        }
        default : return state;
    }
}