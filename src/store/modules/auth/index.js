import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

export default{
    namespaced: true,
    state(){
        return{

            name:" pharma lab ",

            idToken:"",
            email:"",
            refreshToken:"",
            expiresIn:"",
            localId:""

        };
    },
    mutations,
    getters,
    actions,
}
