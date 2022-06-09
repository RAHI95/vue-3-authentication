import axios from 'axios';
import { 
    SET_USER_TOKEN_DATA_MUTATION, 
    SIGNUP_ACTION, 
    SHOW_LOADING_SPINNER_MUTATION,
    LONGIN_ACTION,
    LOGOUT_USER,
    AUTH_USER_ACTION,
    AUTO_LOGIN_ACTION} from '../../storeconstants';

import signupValidations from '../../../services/signupValidations'



export default{
   [LOGOUT_USER](context){
    context.commit(SET_USER_TOKEN_DATA_MUTATION,{
        idToken:null,
        email: null,
        refreshToken:null,
        expiresIn:null,
        localId:null

    });
    localStorage.removeItem('userData')
   },

    async [LONGIN_ACTION](context,payload){
        return context.dispatch(AUTH_USER_ACTION,{
            ...payload,
            URL:`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB3igCGV9c9JTbiqo6i62Lbg9h1uqfYtLU`
        })
    },
    [AUTO_LOGIN_ACTION](context){
        let userData = localStorage.getItem('userData');
        if(userData){
            context.commit(
                SET_USER_TOKEN_DATA_MUTATION,
                JSON.parse(userData)
            )
        }
    },

    async [SIGNUP_ACTION](context,payload){
        return context.dispatch(AUTH_USER_ACTION,{
            ...payload,
            URL:`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB3igCGV9c9JTbiqo6i62Lbg9h1uqfYtLU`
        })
    },
    async [AUTH_USER_ACTION](context, payload){
        let postData = {
            email: payload.email,
            password: payload.password,
            returnSecureToken:true
        };
        let response = '';
        // context.commit(SHOW_LOADING_SPINNER_MUTATION, true,{
        //     root:true
        // });

        try{
            response = await axios.post(payload.URL,postData);

       }catch(err){
        //    context.commit(SHOW_LOADING_SPINNER_MUTATION, false,{
        //        root:true
        //    });
           let errorMessege = signupValidations.getErrorMessegeformCode(
               err.response.data.error.errors[0].message
           )
          throw errorMessege;
         
       }
    //    context.commit(SHOW_LOADING_SPINNER_MUTATION, false,{
    //     root:true
        //  });

       if(response.status === 200){
           let tokenData = {
            idToken:response.data.idToken,
            email: response.data.email,
            refreshToken:response.data.refreshToken,
            expiresIn:response.data.expiresIn,
            localId:response.data.localId

        };
        localStorage.setItem('userData',JSON.stringify(tokenData));
        context.commit(SET_USER_TOKEN_DATA_MUTATION, tokenData)

    }

    },

   
        
};

