<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/" >Home</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/login" >Login</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link class="nav-link" to="/register">Register</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link class="nav-link" to="/users">User</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <a href="#" class="nav-link" @click.prevent="onLogout()">Logout</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { IS_USER_AUTHENTICATED_GETTER, LOGOUT_USER } from '../store/storeConstants'
export default {
computed:{
  ...mapGetters('auth',{
    isAuthenticated:IS_USER_AUTHENTICATED_GETTER
  })
},
methods:{
  ...mapActions('auth',{
    logout:LOGOUT_USER
  }),
  onLogout(){
    this.logout();
    this.$router.replace('/login')

  }

}
}
</script>

<style>

</style>