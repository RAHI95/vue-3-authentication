<template>
  <div>
    <table class="table">
      <tr>
    <th>id</th>
    <th>firstName</th>
    <th>lastName</th>
    <th>occupation</th>
    <th>reviewCount</th>
    <th>reviewScore</th>
  </tr>
  <tr v-for="user in users" :key="user.id">
    <td>{{ user.id }}</td>
    <td>{{user.firstName}}</td>
    <td>{{user.lastName}}</td>
    <td>{{user.occupation}}</td>
    <td>{{user.reviewCount}}</td>
    <td>{{user.reviewScore}}</td>
  </tr>
    </table>
  </div>
</template>

<script>
import axiosInstance from '../services/AxiosTokenInstance';
import { mapGetters, mapMutations } from 'vuex';
import {
    GET_USER_TOKER_GETTER,
    SHOW_LOADING_SPINNER_MUTATION,
} from '../store/storeconstants';

export default {
  data(){
    return{
      users:[]

    }
  },
  computed:{
    ...mapGetters('auth',{
      idToken: GET_USER_TOKER_GETTER

    })
  },
  methods:{
    formatUsers(users){
      for(let key in users){
        this.users.push({...users[key]})
      }
      console.log(this.users)
    },
    ...mapMutations('auth',{
      ShowLoading: SHOW_LOADING_SPINNER_MUTATION
    }),

  },
  mounted(){
    this.ShowLoading(true,{root:true});
    axiosInstance
    .get(`https://pharmacy-management-74beb-default-rtdb.firebaseio.com/users.json`)
    .then((Response)=>{
      this.formatUsers(Response.data)
       this.ShowLoading(false,{root:true});
    })
    .catch(()=>{
       this.ShowLoading(false,{root:true});
    })
    ;
  }

}
</script>

<style>

</style>