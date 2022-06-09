import { SET_USER_TOKEN_DATA_MUTATION } from "../../storeConstants";

export default{
    [SET_USER_TOKEN_DATA_MUTATION](state, payload){
        state.email= payload.email;
        state.idToken= payload.idToken;
        state.refreshToken= payload.refreshToken;
        state.expiresIn= payload.expiresIn;
        state.localId= payload.localId;
    }
};