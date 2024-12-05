<template>
    <div class="p-6 pb-4 w-full flex flex-col items-start gap-6 justify-start bg-black">
      <img src="../public/img/skyders isotipo.png" alt="Logo" class="w-30 h-9" />
      <h1 class="text-3xl font-made-tommy font-light bg-black text-white">Pago</h1>
    </div>
        

    <div class="min-h-screen font-made-tommy bg-black text-white flex gap-4 flex-col md:flex-row items-center md:items-start md:justify-between p-6 ">
      <!-- Sección de Información de Contacto -->
      <div class="bg-black border border-yellow rounded-xl p-6 w-full lg:w-2/3 space-y-6">
        <div>
          <h2 class="text-lg font-semibold text-yellow-400 mb-2">1. Información de contacto</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label >Nombre</label>
              <input
                class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label >Apellido</label>
              <input
                class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div class="mt-4">
            <label >Correo electrónico</label>
            <input
              class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="mt-4 flex items-center">
            <input type="checkbox" id="use-account-info" class="mr-2 text-pink-600 focus:ring-pink-500" />
            <label for="use-account-info" id="autofill" class="text-sm text-white font-medium">Rellenar con la información de mi cuenta</label>
          </div>
          <div class="mt-4">
            <label >Número de teléfono</label>
            <div class="flex">
              <span class="inline-flex items-center px-3 rounded-l-lg bg-rosy text-magenta ">+52</span>
              <input
                class="w-full p-2  rounded-r-lg focus:outline-yellow"
                type="text"
                placeholder="Número de teléfono"
                id="phone"
              />
            </div>
          </div>
        </div>
  
        <!-- Método de pago -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-400 mb-2">2. Método de pago</h2>
          <div class="flex space-x-4">
            <button class="bg-yellow rounded-lg text-magenta px-6 py-2 rounded hover:scale-105 flex gap-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
            </svg>
            Débito o Crédito
            </button>
            <button class="bg-yellow rounded-lg text-magenta px-6 py-2 rounded hover:scale-105 flex gap-2 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
              </svg>
            Efectivo
            </button>
          </div>
          <div class="mt-4">
            <label >Nombre del titular de la tarjeta</label>
            <input
              class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              placeholder="Titular de la tarjeta"
            />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label >Número de tarjeta</label>
              <input
                class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Número de tarjeta"
              />
            </div>
            <div>
              <label >Fecha de expiración</label>
              <input
                class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="MM/AA"
              />
            </div>
            <div>
              <label class="block text-sm font-medium">CVV</label>
              <input
                class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="CVV"
              />
            </div>
          </div>
          <CustomButton color="magenta" class="hover:shadow-magenta/50 mt-4">Finalizar Pago</CustomButton>
        </div>
      </div>
  
      <!-- Resumen de Compra -->
      <aside class="bg-black border border-yellow rounded-xl p-6 w-full lg:w-1/3 mt-6 lg:mt-0">
        <h2 class="text-xl font-semibold text-yellow-400 mb-4">Resumen de compra</h2>
        <div class="space-y-2 text-sm">
          <p class="flex justify-between">
            <span>Nombre del evento</span>
            <span>$000.00</span>
          </p>
          <p class="flex justify-between">
            <span>Boletos</span>
            <span>$000.00</span>
          </p>
          <p class="flex justify-between">
            <span>Subtotal</span>
            <span>$000.00</span>
          </p>
          <p class="flex justify-between">
            <span>IVA</span>
            <span>$000.00</span>
          </p>
        </div>
        <hr class="border-gray-700 my-4" />
        <p class="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>$000.00</span>
        </p>
      </aside>
    </div>
  </template>
  
  <script setup>
  import CustomButton from './components/CustomButton.vue';
  </script>
  
  <style scoped>
  input{
    @apply rounded-lg;
    @apply bg-white;
  }
  input:focus{
    @apply outline-yellow;
  }
  label{
    @apply font-light;
    @apply text-yellow;
    @apply block;
  }
  #autofill{
    @apply text-white;
  }
  #phone{
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  /* Personalización si es necesaria */
  </style>
  