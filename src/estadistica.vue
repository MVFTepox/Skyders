<template>
    <div class="min-h-screen bg-white font-made-tommy flex flex-col lg:flex-row">
      <!-- Lista de Eventos -->
      <aside class="bg-rosy w-full lg:w-1/4 p-4 space-y-4">
        <h2 class="text-3xl text-center mb-4">Eventos</h2>
        <button
          v-for="event in events"
          :key="event.id"
          @click="selectEvent(event.id)"
          :class="[
            'block w-full text-left px-4 py-2 rounded-lg',
            selectedEvent === event.id
              ? 'bg-magenta text-white'
              : 'bg-yellow text-black hover:bg-yellow-300 hover:border-magenta hover:border-2 transition-all',
          ]"
        >
          {{ event.name }}
        </button>
      </aside>
  
      <!-- Estadísticas del Evento -->
      <main class="flex-1 bg-white p-6">
        <h1 class="text-3xl  mb-6 text-center lg:text-left">
          Estadísticas de {{ currentEvent.name }}
        </h1>
  
        <!-- Estadísticas Principales -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="data-square">
            <h3 class="text-lg ">Asientos Totales</h3>
            <p class="text-3xl font-bold">{{ currentEvent.seats }}</p>
          </div>
          <div class="data-square">
            <h3 class="text-lg">Boletos Vendidos</h3>
            <p class="text-3xl font-bold">{{ currentEvent.sold }}</p>
          </div>
          <div class="data-square">
            <h3 class="text-lg ">Boletos Disponibles</h3>
            <p class="text-3xl font-bold">{{ currentEvent.available }}</p>
          </div>
          <div class="data-square">
            <h3 class="text-lg ">Cancelaciones</h3>
            <p class="text-3xl font-bold">{{ currentEvent.cancellations }}</p>
          </div>
        </div>
  
        <!-- Progreso de Ventas -->
        <div class="mt-8">
          <h2 class="text-xl font-semibold mb-4">Progreso de Ventas</h2>
          <div class="space-y-4">
            <!-- Boletos Vendidos -->
            <div>
              <label class="block text-sm font-medium mb-1">Boletos Vendidos</label>
              <div class="bg-rosy h-4 rounded relative">
                <div
                  class="absolute top-0 left-0 h-full bg-magenta rounded"
                  :style="{ width: soldPercentage + '%' }"
                ></div>
              </div>
            </div>
  
            <!-- Cancelaciones -->
            <div>
              <label class="block text-sm font-medium mb-1">Cancelaciones</label>
              <div class="bg-rosy h-4 rounded relative">
                <div
                  class="absolute top-0 left-0 h-full bg-magenta rounded"
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
  .data-square {
    @apply bg-yellow;
    @apply p-4;
    @apply rounded-lg;
    @apply text-center;
    @apply shadow;
  }
  </style>
  