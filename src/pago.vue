<template>
    <div class="p-4 w-full flex justify-start bg-black">
        <div class=" mb-4">
          <img src="C:\Users\ohern\Downloads\skyders-removebg-preview (1).png" alt="Logo" class="w-30 h-9" />
        </div>
        </div>
        <h1 class="text-2xl font-tommy font-bold bg-black text-white">Pago</h1>

    <div class="min-h-screen bg-black text-white flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-4 lg:p-10">
      <!-- Sección de Información de Contacto -->
      <div class="bg-black border border-yellow-500 rounded-lg p-6 w-full lg:w-2/3 space-y-6">
        <div>
          <h2 class="text-lg font-semibold text-yellow-400 mb-2">1. Información de contacto</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-sm font-medium">Nombre</label>
              <input
                class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Nombre"
              />
            </div>
            <div>
              <label class="block text-sm font-medium">Apellido</label>
              <input
                class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Apellido"
              />
            </div>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium">Correo electrónico</label>
            <input
              class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="email"
              placeholder="Correo electrónico"
            />
          </div>
          <div class="mt-4 flex items-center">
            <input type="checkbox" id="use-account-info" class="mr-2 text-pink-600 focus:ring-pink-500" />
            <label for="use-account-info" class="text-sm font-medium">Rellenar con la información de mi cuenta</label>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium">Número de teléfono</label>
            <div class="flex">
              <span class="inline-flex items-center px-3 rounded-l border border-gray-700 bg-gray-800">+52</span>
              <input
                class="w-full p-2 rounded-r border-t border-r border-b border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Número de teléfono"
              />
            </div>
          </div>
          <button class="bg-pink-600 text-white px-6 py-2 rounded mt-4 hover:bg-pink-700 w-full md:w-auto">
            Continuar
          </button>
        </div>
  
        <!-- Método de pago -->
        <div>
          <h2 class="text-lg font-semibold text-yellow-400 mb-2">Método de pago</h2>
          <div class="flex space-x-4">
            <button class="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600">Débito o Crédito</button>
            <button class="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600">Efectivo</button>
          </div>
          <div class="mt-4">
            <label class="block text-sm font-medium">Nombre del titular de la tarjeta</label>
            <input
              class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              type="text"
              placeholder="Titular de la tarjeta"
            />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label class="block text-sm font-medium">Número de tarjeta</label>
              <input
                class="w-full p-2 rounded border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Número de tarjeta"
              />
            </div>
            <div>
              <label class="block text-sm font-medium">Fecha de expiración</label>
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
          <button class="bg-pink-600 text-white px-6 py-2 rounded mt-4 hover:bg-pink-700 w-full md:w-auto">
            Finalizar Pago
          </button>
        </div>
      </div>
  
      <!-- Resumen de Compra -->
      <aside class="bg-black border border-yellow-500 rounded-lg p-6 w-full lg:w-1/3 mt-6 lg:mt-0">
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
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  /* Personalización si es necesaria */
  </style>
  