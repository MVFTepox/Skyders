<template>
    <div class="min-h-screen bg-black flex items-center justify-center">
      <div class="w-full max-w-md bg-black text-white p-6 rounded-md shadow-md font-made-tommy">
        <div class="flex justify-center mb-6">
          <img @click="router.push('/')" src="../public/img/skyders isotipo.png" alt="Logo" class="h-9 cursor-pointer" />
        </div>
  
        <h2 class="text-center text-xl font-light mb-6">
          Un paso más para disfrutar de los eventos más emocionantes de México...
        </h2>
  
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="codigo-postal" class="block font-light text-yellow mb-2">
              Código Postal
            </label>
            <input
              id="codigo-postal"
              type="text"
              v-model="codigoPostal"
              placeholder="Ingrese su código postal"
              class="w-full px-4 py-2 rounded-md border border-gray-600 bg-black text-white focus:outline-none focus:border-pink-600"
            />
          </div>
  
          <div class="flex items-center mb-6">
            <input
              id="terms"
              type="checkbox"
              v-model="acceptTerms"
              class="w-5 h-5 text-magenta bg-black border border-white rounded-lg focus:ring-magenta"
            />
            <label for="terms" class="ml-2 ">
              Acepto los términos y condiciones
            </label>
          </div>
  
          <button
            type="submit"
            :disabled="!acceptTerms"
            class="w-full bg-magenta text-white text-lg font-light py-2 rounded-md hover:scale-105 hover:shadow-lg hover:shadow-magenta/50 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none transition duration-500"
          >
            Registrarme
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from 'vue-router';
  export default {
    data() {
      return {
        codigoPostal: "",
        acceptTerms: false,
        router: useRouter(),
      };
    },
    methods: {
      submitForm() {
        if (this.acceptTerms) {
          alert(`Código Postal: ${this.codigoPostal}`);
        } else {
          alert("Debes aceptar los términos y condiciones para continuar.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  img {
    max-height: 50px;
  }
  </style>
  