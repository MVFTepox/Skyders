<template>
    <div class="min-h-screen bg-white flex flex-col lg:flex-row">
      <!-- Lista de Eventos -->
      <aside class="bg-pink-100 w-full lg:w-1/4 p-4 space-y-4">
        <h2 class="text-xl font-bold mb-4">Eventos</h2>
        <button
          v-for="event in events"
          :key="event.id"
          @click="selectEvent(event.id)"
          :class="[
            'block w-full text-left px-4 py-2 rounded',
            selectedEvent === event.id
              ? 'bg-pink-600 text-white'
              : 'bg-yellow-100 text-black hover:bg-yellow-300'
          ]"
        >
          {{ event.name }}
        </button>
      </aside>
  
      <!-- Estadísticas del Evento -->
      <main class="flex-1 bg-white p-6">
        <h1 class="text-2xl font-bold mb-6 text-center lg:text-left">
          Estadísticas de {{ currentEvent.name }}
        </h1>
  
        <!-- Estadísticas Principales -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-yellow-100 p-4 rounded shadow text-center">
            <h3 class="text-lg font-semibold">Asientos Totales</h3>
            <p class="text-3xl font-bold">{{ currentEvent.seats }}</p>
          </div>
          <div class="bg-yellow-100 p-4 rounded shadow text-center">
            <h3 class="text-lg font-semibold">Boletos Vendidos</h3>
            <p class="text-3xl font-bold">{{ currentEvent.sold }}</p>
          </div>
          <div class="bg-yellow-100 p-4 rounded shadow text-center">
            <h3 class="text-lg font-semibold">Boletos Disponibles</h3>
            <p class="text-3xl font-bold">{{ currentEvent.available }}</p>
          </div>
          <div class="bg-yellow-100 p-4 rounded shadow text-center">
            <h3 class="text-lg font-semibold">Cancelaciones</h3>
            <p class="text-3xl font-bold">{{ currentEvent.cancellations }}</p>
          </div>
        </div>
  
        <!-- Progreso de Ventas -->
        <div class="mt-8">
          <h2 class="text-xl font-bold mb-4">Progreso de Ventas</h2>
          <div class="space-y-4">
            <!-- Boletos Vendidos -->
            <div>
              <label class="block text-sm font-medium mb-1">Boletos Vendidos</label>
              <div class="bg-pink-100 h-4 rounded relative">
                <div
                  class="absolute top-0 left-0 h-full bg-pink-600 rounded"
                  :style="{ width: soldPercentage + '%' }"
                ></div>
              </div>
            </div>
  
            <!-- Cancelaciones -->
            <div>
              <label class="block text-sm font-medium mb-1">Cancelaciones</label>
              <div class="bg-pink-100 h-4 rounded relative">
                <div
                  class="absolute top-0 left-0 h-full bg-pink-600 rounded"
                  :style="{ width: cancellationPercentage + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedEvent: 1,
        events: [
          {
            id: 1,
            name: "Evento 1",
            seats: 1000,
            sold: 560,
            available: 440,
            cancellations: 3,
          },
          {
            id: 2,
            name: "Evento 2",
            seats: 800,
            sold: 400,
            available: 400,
            cancellations: 5,
          },
          {
            id: 3,
            name: "Evento 3",
            seats: 1200,
            sold: 800,
            available: 400,
            cancellations: 2,
          },
        ],
      };
    },
    computed: {
      currentEvent() {
        return this.events.find((event) => event.id === this.selectedEvent) || {};
      },
      soldPercentage() {
        return ((this.currentEvent.sold / this.currentEvent.seats) * 100).toFixed(1);
      },
      cancellationPercentage() {
        return (
          ((this.currentEvent.cancellations / this.currentEvent.seats) * 100).toFixed(
            1
          )
        );
      },
    },
    methods: {
      selectEvent(id) {
        this.selectedEvent = id;
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  