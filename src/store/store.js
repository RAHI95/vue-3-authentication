import { createStore } from "vuex";
import auth from "./modules/auth/index";
import { SHOW_LOADING_SPINNER_MUTATION } from "./storeConstants";

const store= createStore({
    modules:{
        auth
    },
    state(){
        return{
            ShowLoading: false
        };
    },
    mutations:{
        [SHOW_LOADING_SPINNER_MUTATION](state,payload){
            state.ShowLoading = payload;
        },
    },


});



export default store;