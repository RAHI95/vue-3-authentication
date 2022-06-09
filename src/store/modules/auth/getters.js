import { GET_USER_TOKER_GETTER, IS_USER_AUTHENTICATED_GETTER } from "../../storeConstants";

export default{
    [GET_USER_TOKER_GETTER]:(state)=>{
        return state.idToken
    },
    [IS_USER_AUTHENTICATED_GETTER](state){
        return !!state.idToken;
    }
};