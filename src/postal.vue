<template>
    <div class="min-h-screen bg-black flex items-center justify-center">
      <div class="w-full max-w-md bg-black text-white p-6 rounded-md shadow-md">
        <div class="flex justify-center mb-6">
          <img src="C:\Users\ohern\Downloads\skyders-removebg-preview (1).png" alt="Logo" class="h-12" />
        </div>
  
        <h2 class="text-center text-lg font-semibold mb-6">
          Un paso más para disfrutar de los eventos más emocionantes de México...
        </h2>
  
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="codigo-postal" class="block text-sm font-medium mb-2">
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
              class="w-5 h-5 text-pink-600 bg-black border border-gray-600 rounded focus:ring-pink-600"
            />
            <label for="terms" class="ml-2 text-sm">
              Acepto los términos y condiciones
            </label>
          </div>
  
          <button
            type="submit"
            :disabled="!acceptTerms"
            class="w-full bg-pink-600 text-white font-semibold py-2 rounded-md hover:bg-pink-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
          >
            Registrarme
          </button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        codigoPostal: "",
        acceptTerms: false,
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
  