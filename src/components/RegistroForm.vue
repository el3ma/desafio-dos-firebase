<template>
    <div class="container py-5">
        <div class="d-flex justify-content-center">
            <form @submit.prevent="registro">
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row">
                    <div class="col-md-6 mb-4">
                        <div data-mdb-input-init class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Nombre" v-model="nombre">
                            <label for="floatingInput" class="text-label">Nombre</label>
                        </div>
                    </div>
                    <div class="col-md-6 mb-4">
                        <div data-mdb-input-init class="form-floating">
                            <input type="text" class="form-control" id="floatingInput" placeholder="Apellido" v-model="apellido">
                            <label for="floatingInput" class="text-label">Apellido</label>
                        </div>
                    </div>
                </div>
                
                <!-- Email input -->
                <div data-mdb-input-init class="form-floating mb-4 col">
                    <input type="text" class="form-control" id="floatingInput" placeholder="Email" v-model="mail">
                    <label for="floatingInput" class="text-label">Email</label>
                </div>
                
                <!-- Password input -->
                <div data-mdb-input-init class="form-floating mb-4 col">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Password" v-model="password">
                    <label for="floatingInput" class="text-label">Password</label>
                </div>
                <div data-mdb-input-init class="form-floating mb-4 col">
                    <input type="password" class="form-control" id="floatingInput" placeholder="Password" v-model="replypassword">
                    <label for="floatingInput" class="text-label">Repita su Password</label>
                </div>
                
                <!-- Submit button -->
                <button type="submit" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block mb-4 col-4">
                    Crear usuario
                </button>
                
            </form>
        </div>
    </div>
</template>

<script>
import { auth, createUserWithEmailAndPassword} from '@/auth'
export default {
    name:'RegistroForm',
    data(){
        return{
            nombre:'',
            apellido:'',
            mail:'',
            password:'',
            replypassword:''
        }
    },
    methods:{
        async registro(){
            try {
                if(!this.nombre, !this.apellido, !this.mail, !this.password, !this.replypassword){
                    return alert('Debes ingresar todos los valores')
                }
                if(this.password != this.replypassword){
                    return alert('Los password deben coincidir, por favor verifique')
                }

                const credencialUsuario = await createUserWithEmailAndPassword(auth, this.mail, this.password)
                console.log(credencialUsuario)
                alert ('Usuario registrado con exito')
                this.$router.push('/login')
            } catch (error) {
                console.log(error)
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