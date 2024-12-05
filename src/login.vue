<template>
  
    <div class=" flex-col flex items-center bg-black ">
       <!-- Logo -->
       <div class="p-6 pb-2 w-full flex justify-start ">
          <img @click="router.push('/')" src="../public/img/skyders isotipo.png" alt="Logo" class="w-30 h-9 cursor-pointer" />
        </div>
      <div class="bg-black text-white mb-4 p-6 py-4 border-[1px] border-white/50 shadow-xl shadow-white rounded-xl shadow-lg w-full max-w-md font-made-tommy">
        <!-- Título y enlace de registro -->
        <h2 class="text-center text-2xl font-light mb-2">Inicia Sesión</h2>
        <p class="text-center font-light mb-6">
          ¿Nuevo aquí? <span @click="router.push('/registro')" class="text-yellow hover:underline cursor-pointer">Crea tu cuenta</span>
        </p>
  
        <!-- Campos del formulario -->
        <form @submit.prevent="handleSubmit">
          <label class="block text-yellow-500 mb-1">Correo Electrónico</label>
          <input
            type="email"
            v-model="email"
            class="w-full mb-4 px-4 py-2 rounded bg-white-800 text-black placeholder-gray-400 "
            placeholder="Ingresa tu correo"
            required
          />
  
          <label class="block text-yellow-500 mb-1">Contraseña</label>
          <input
            type="password"
            v-model="password"
            class="w-full mb-4 px-4 py-2  text-black placeholder-gray-400"
            placeholder="Ingresa tu contraseña"
            required
          />
  
          <div class="flex justify-center items-center text-white mb-4">o</div>
  
          <!-- Botones de redes sociales -->
          <button type="button" class="social-button  mb-4 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
            </svg>
            Google
          </button>

          <button type="button" class="social-button   mb-4  ">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
            Facebook
          </button>
          <!-- Botón de iniciar sesión -->
          <button type="submit " class="w-full text-lg  bg-magenta transition duration-500 text-white  rounded hover:shadow-lg hover:shadow-magenta/50 hover:scale-105 transition font-made-tommy font-light p-2 w-56 justify-center">
            Iniciar Sesión
          </button>
          
          

        </form>
      </div>
    </div>
   
  </template>
  
  <script>
import CustomButton from './components/CustomButton.vue';
import { useRouter } from 'vue-router';

  export default {
    components: {
      CustomButton
    },
    data() {
      return {
        email: '',
        password: '',
        router: useRouter(),
      };
    },
    methods: {
      handleSubmit() {
        alert(`Correo: ${this.email}, Contraseña: ${this.password}`);
      }
    
    },
    
    
  };
  </script>
  
  <style scoped>
  label{
    @apply font-light;
    @apply text-yellow;
  }
  input{
    @apply rounded-lg;
  }
  input:focus{
    @apply outline-yellow;
  }
  button{
    @apply rounded-lg;
  }
  .social-button{
    @apply bg-rosy;
    @apply text-magenta;
    @apply flex;
    @apply gap-2;
    @apply justify-center;
    @apply w-full;
    @apply items-center;
    @apply transition;
    @apply duration-500;
    @apply px-4;
    @apply py-2;
  }
  .social-button:hover{
    @apply bg-magenta;
    @apply text-rosy;
    @apply scale-105;

  }
  </style>
  