<template>
    <div class="flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <aside class="bg-pink-100 w-full lg:w-64 p-4 flex-shrink-0">
        <h2 class="text-xl font-bold text-gray-700 mb-4">Eventos</h2>
        <ul>
          <li
            v-for="(event, index) in events"
            :key="index"
            @click="selectEvent(index)"
            :class="[
              'p-3 rounded mb-2 cursor-pointer text-center',
              selectedEventIndex === index
                ? 'bg-pink-700 text-white'
                : 'bg-yellow-100 text-gray-700 hover:bg-yellow-200'
            ]"
          >
            {{ event.name }}
          </li>
        </ul>
      </aside>
  
      
      <main class="flex-1 p-6">
        <h2 class="text-2xl font-bold text-black mb-6">Detalles del Evento</h2>
  
        <!-- Detalles del Evento -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 font-semibold">Nombre del Evento</label>
            <input
              v-model="selectedEvent.name"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="text"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-semibold">Lugar del Evento</label>
            <input
              v-model="selectedEvent.location"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="text"
            />
          </div>
          <div class="md:col-span-2">
            <label class="block text-gray-700 font-semibold">Descripción del Evento</label>
            <textarea
              v-model="selectedEvent.description"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label class="block text-gray-700 font-semibold">Fecha del Evento</label>
            <input
              v-model="selectedEvent.date"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="date"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-semibold">Horario del Evento</label>
            <input
              v-model="selectedEvent.time"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="time"
            />
          </div>
        </div>
  
        <!-- Datos del Organizador -->
        <h2 class="text-2xl font-bold text-black mt-6 mb-4 ">Datos del Organizador</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-gray-700 font-semibold">Correo Electrónico</label>
            <input
              v-model="selectedEvent.organizerEmail"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="email"
            />
          </div>
          <div>
            <label class="block text-gray-700 font-semibold">Número de Teléfono</label>
            <input
              v-model="selectedEvent.organizerPhone"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="text"
            />
          </div>
        </div>
  
        <!-- Botones -->
        <div class="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
          <button
            @click="publishEvent"
            class="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 w-full sm:w-auto"
          >
            Publicar Evento
          </button>
          <button
            @click="rejectEvent"
            class="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 w-full sm:w-auto"
          >
            Rechazar Evento
          </button>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedEventIndex: 0,
        events: [
          {
            name: "",
            location: "",
            description: "",
            date: "",
            time: "",
            organizerEmail: "",
            organizerPhone: "",
          },
          { name: "Evento 2", location: "", description: "", date: "", time: "", organizerEmail: "", organizerPhone: "" },
          { name: "Evento 3", location: "", description: "", date: "", time: "", organizerEmail: "", organizerPhone: "" },
        ],
      };
    },
    computed: {
      selectedEvent() {
        return this.events[this.selectedEventIndex];
      },
    },
    methods: {
      selectEvent(index) {
        this.selectedEventIndex = index;
      },
      publishEvent() {
        alert("Evento publicado correctamente.");
      },
      rejectEvent() {
        alert("Evento rechazado.");
      },
    },
  };
  </script>
  
  <style scoped>
  /* Personalización adicional si se requiere */
  </style>
  