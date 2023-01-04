<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
// import { useRouter } from 'vue-router';

const userStore = useUserStore();
// const router = useRouter();

const email = ref('damar123@test.com');
const password = ref('12345678');

const handleSubmit = async () => {

    if(!email.value || !password.value){
        return alert('Llena los campos')
    }
    await userStore.loginUser(email.value, password.value);
    // router.push('/');
}

</script>

<template>
    <div>
        <h1>Login</h1>

        <form @submit.prevent="handleSubmit">
            <input type="text" placeholder="Ingrese el email" v-model="email">
            <input type="password" placeholder="Ingrese su contraseña" v-model="password">
            <button type="submit" :disabled="userStore.loadingUser">Ingresar</button>
        </form>

    </div>
</template>