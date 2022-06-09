<template>
  <div>
    <the-loader v-if="ShowLoading"></the-loader>
    <TheNavigation/>
   <div class="container">
     <div class="row">
       <div class="col-md-6">
          <router-view></router-view>
       </div>
     </div>
   </div>
    
  </div>
</template>

<script>

import TheNavigation from './components/TheNavigation.vue';
import TheLoader from './components/TheLoader.vue';
import { mapState } from 'vuex';
import { AUTO_LOGIN_ACTION } from './store/storeConstants';
export default {
  computed:{
    ...mapState({
      ShowLoading: state=>state.ShowLoading
    })
  },

components:{
  TheNavigation, TheLoader
},
created(){
  this.$store.dispatch(`auth/${AUTO_LOGIN_ACTION}`)
}
}
</script>

<style>

</style>