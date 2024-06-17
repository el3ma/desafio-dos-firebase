<template>
  <nav>
    <router-link class="px-2" to="/">Home</router-link>
    <router-link class="px-2" to="/registro" v-if="!usuario">Registrate</router-link>
    <router-link class="px-2" to="/login" v-if="!usuario">Login</router-link>
    <router-link class="px-2" to="/userview" v-if="usuario">Hola Usuario</router-link>
    <a href="" @click.prevent="logout" v-if="usuario">Logout</a>
  </nav>
  <router-view/>
</template>

<script>
import {auth, signOut} from '@/auth'
import {mapState} from 'vuex'
export default {
  name:'App',
  computed:{
    ...mapState(['usuario'])
  },
  methods: {
    async logout(){

      try {
        await signOut(auth);

        alert("Se ha cerrado la sesión con éxito.");
        this.$router.push("/");

      } catch (error) {
        console.log(error);
        alert("No se pudo cerrar la sesión");
      }

    }
  }
}
</script>
<style lang="scss">
body{
  background-color: #1A2130;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;

}

nav {
  padding: 30px;

  
  a {
    font-weight: bold;
    color: white;
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
