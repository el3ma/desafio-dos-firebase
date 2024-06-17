<template>
    <div class="loginForm">
        <h3 class="text-center">Inicia Sesión</h3>
        <div class="row justify-content-center py-1">

            <form @submit.prevent="login" class="col-8 col-md-3">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email">
                    <label for="floatingInput" class="text-label">Email</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="password">
                    <label for="floatingPassword" class="text-label">Password</label>
                </div>
                <button type="submit" class="btn btn-primary my-5 col-4">Iniciar</button>
            </form>
        </div>
    </div>
</template>

<script>
import {auth, signInWithEmailAndPassword} from '@/auth'
export default {
    name: 'LoginForm',
    data(){
        return{
            email: '',
            password:''
        }
    },
    methods:{
        async login(){
            try {
                await signInWithEmailAndPassword(auth, this.email, this.password)
                alert ('Usuario autenticado con éxito')
                this.$router.push('/userview')
            } catch (error) {
                console.log(error)
                alert("Ha ocurrido un error en el inicio de sesión, verifique sus credenciales.")
            }
        }
    }
}
</script>

<style  scoped>
.text-label{
    color: #1A2130;
}
</style>