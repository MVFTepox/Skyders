<template>
  
    <div class="felx flex-col flex items-center bg-black ">
       <!-- Logo -->
       <div class="p-4 w-full flex justify-start ">
        <div class=" mb-4">
          <img src="C:\Users\ohern\Downloads\skyders-removebg-preview (1).png" alt="Logo" class="w-30 h-9" />
        </div>
        </div>
      <div class="bg-black text-white p-8 rounded-lg shadow-lg w-full max-w-md">
       
  
        <!-- Título y enlace de registro -->
        <h2 class="text-center text-2xl font-semibold mb-2">Inicia Sesión</h2>
        <p class="text-center text-gray-400 mb-6">
          ¿Nuevo aquí? <a href="#" class="text-yellow-500">Crea tu cuenta</a>
        </p>
  
        <!-- Campos del formulario -->
        <form @submit.prevent="handleSubmit">
          <label class="block text-yellow-500 mb-1">Correo Electrónico</label>
          <input
            type="email"
            v-model="email"
            class="w-full mb-4 px-4 py-2 rounded bg-white-800 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Ingresa tu correo"
            required
          />
  
          <label class="block text-yellow-500 mb-1">Contraseña</label>
          <input
            type="password"
            v-model="password"
            class="w-full mb-6 px-4 py-2 rounded bg-white-800 text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            placeholder="Ingresa tu contraseña"
            required
          />
  
          <div class="flex justify-center items-center text-gray-400 mb-6">o</div>
  
          <!-- Botones de redes sociales -->
          <button type="button" class="w-full flex items-center justify-center bg-white text-pink-700 py-2 px-4 rounded mb-4 hover:bg-red-700 transition">
            <span class="mr-2">G</span> Google
          </button>
          <button type="button" class="w-full flex items-center justify-center bg-white text-pink-700 py-2 px-4 rounded mb-4 hover:bg-blue-700 transition ">
            <span class="mr-2">F</span> Facebook
          </button>
  
          <!-- Botón de iniciar sesión -->
          <button type="submit " class="w-full text-lg rounded-lg bg-pink-700 text-white  rounded hover:bg-pink-800 transition font-made-tommy font-light p-2 w-56 justify-center">
            Iniciar Sesión
          </button>
          
          

        </form>
      </div>
    </div>
   
  </template>
  
  <script>

  export default {
    data() {
      return {
        email: '',
        password: ''
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
  </style>
  