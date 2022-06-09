import axios from "axios";
import store from "../store/store";
import { GET_USER_TOKER_GETTER } from "../store/storeConstants";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use((config)=>{
    let params = new URLSearchParams();
    let idToken = store.getters[`auth/${GET_USER_TOKER_GETTER}`];
    params.append('auth',idToken);
    config.params = params;
    return config;
    // console.log(config)

});

export default axiosInstance;
