<template>
    <div class="flex-col flex items-center bg-black  font-made-tommy">
         <!-- Logo -->
       <div class="p-6 w-full flex justify-start ">
          <img @click="router.push('/')" src="../public/img/skyders isotipo.png" alt="Logo" class="w-30 h-9 cursor-pointer" />
        </div>

      <form class="w-full max-w-md bg-black p-8  border-white/50 border-[1px] shadow-xl shadow-white rounded-xl font-made-tommy">
        <h2 class="text-white text-2xl font-light text-center mb-2 ">Crea una Cuenta</h2>
        <p class="text-white mb-4 font-light text-center font-made-tommy">
          ¿Ya tienes cuenta?
          <span @click="router.push('/iniciar-sesion')" class="cursor-pointer text-yellow hover:underline">Inicia Sesión</span>
        </p>
        
        <div class="mb-4 font-made-tommy">
          <label  for="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            class="w-full p-2 bg-white text-white border border-gray-700 rounded"
          />
        </div>
  
        <div class="flex space-x-4 mb-4 font-made-tommy">
          <div class="flex-1">
            <label  for="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              class="w-full p-2 bg-white text-white border border-gray-700 rounded"
            />
          </div>
          <div class="flex-1 font-made-tommy">
            <label  for="apellido">Apellido</label>
            <input
              type="text"
              id="apellido"
              class="w-full p-2 bg-white text-white border border-gray-700 rounded"
            />
          </div>
        </div>
  
        <div class="flex space-x-4 mb-4 font-made-tommy">
          <div class="flex-1">
            <label  for="codigo-postal">Código Postal</label>
            <input
              type="text"
              id="codigo-postal"
              class="w-full p-2 bg-white text-white border border-gray-700 rounded"
            />
          </div>
          <div class="flex-1 font-made-tommy">
            <label for="fecha-nacimiento">Fecha de Nacimiento</label>
            <input
              type="date"
              id="fecha-nacimiento"
              class="w-full p-2 bg-white text-black border border-gray-700 rounded"
            />
          </div>
        </div>
  
        <div class="mb-4 font-made-tommy">
          <label  for="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            class="w-full p-2 bg-white text-white border border-gray-700 rounded"
          />
        </div>
  
        <div class="mb-4 font-made-tommy">
          <label  for="telefono">Número de Teléfono</label>
          <input
            type="tel"
            id="telefono"
            class="w-full p-2 bg-white text-white border border-gray-700 rounded"
          />
        </div>
  
        <div class="mb-4 font-made-tommy">
          <label  for="soy-un">Soy un...</label>
          <select
            id="soy-un"
            class="w-full p-2 bg-yellow text-magenta outline-none  rounded-lg"
          >
            <option value="">Selecciona una opción</option>
            <option value="option1 " >Cliente</option>
            <option value="option2">Organizador de Eventos</option>
            
          </select>
        </div>
  
        <div class="flex items-center justify-between mb-4 gap-2">
          <button class="social-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"/>
              </svg>
              Google</button>
          <button class="social-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
              </svg>
              Facebook
          </button>
        </div>
  
        <div class="flex items-center mb-4">
          <input
            type="checkbox"
            id="terms"
            class="mr-2"
          />
          <label for="terms" id="terms">Acepto los términos y condiciones</label>
        </div>
  
        <button type="submit" class=" w-full text-lg bg-[#970046] transition duration-500 font-light rounded-lg bg-magenta hover:shadow-lg hover:shadow-[#970046]/50 hover:scale-105 text-white py-2 rounded">
          Registrarme
        </button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  </script>
  
  <style scoped>
  #terms{
    @apply font-light;
    @apply text-white;
  }
  label{
    @apply font-light;
    @apply text-yellow;
    @apply block;
    @apply mb-1;
  }
  input{
    @apply rounded-lg;
  }
  ::placeholder,option{
    @apply text-[#970046];
  }
  input:focus{
    @apply outline-yellow;
  }
  option{
    @apply bg-magenta;
    @apply text-white;
  }
  .social-button{
    @apply bg-rosy;
    @apply text-magenta;
    @apply flex;
    @apply gap-2;
    @apply justify-center;
    @apply w-full;
    @apply py-2;
    @apply items-center;
    @apply transition;
    @apply duration-500;
    @apply rounded-lg;
    @apply px-4;
  }
  .social-button:hover{
    @apply bg-magenta;
    @apply text-rosy;
    @apply scale-105;

  }
  /* Puedes agregar estilos adicionales si es necesario */
  </style>
  