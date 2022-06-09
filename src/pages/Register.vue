<template>
<h3 class="my-3">Register</h3>
<div class="alert alert-danger" v-if="error">{{error}}</div>
<form @submit.prevent="onRegister()">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email">
        <div class="error" v-if="errors.email">{{errors.email}}</div>

    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
            <div class="error" v-if="errors.password">{{errors.password}}</div>

  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import signupValidations from '../services/signupValidations';
import { SIGNUP_ACTION } from '../store/storeConstants';

export default {

  data(){
    return{
    email:"",
    password:"",
    errors:[],
    error:""
    }
    

  },
  methods:{
    ...mapActions('auth',{
      signup: SIGNUP_ACTION

    }),
    onRegister(){
      let validations = new signupValidations(this.email, this.password);

      this.errors = validations.checkValidations();
      
      if('email' in this.errors || 'password' in this.errors){
        return false
      }
      this.signup({email: this.email, password: this.password}).catch(error=>{
        this.error = error;
      });

    },
 
  },


}
</script>

<style>

</style>