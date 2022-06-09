import { createRouter,createWebHashHistory } from "vue-router"
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import User from "./pages/User.vue";
import Home from "./pages/Home.vue";
import store from "./store/store";
import { IS_USER_AUTHENTICATED_GETTER } from "./store/storeConstants";

const routes = [
    {path :'', component: Home},
    {path :'/login', component: Login, meta:{auth:false}},
    {path :'/register', component: Register, meta:{auth:false}},
    {path :'/users', component: User, meta:{auth:true}},


];

const router = createRouter({

 history:createWebHashHistory(),
 routes,

});

router.beforeEach((to, from, next) => {
  if( 'auth' in to.meta &&
      to.meta.auth && 
      !store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]
      ) {
      next('/login');
      } else if(
     'auth' in to.meta &&    
     !to.meta.auth && 
     store.getters[`auth/${IS_USER_AUTHENTICATED_GETTER}`]
     ){
    next('/users')
     }
else{
    next();
}   
})

export default router