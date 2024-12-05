<template>
    <div class="font-made-tommy flex flex-col lg:flex-row min-h-screen bg-gray-100">
      <aside class="bg-pink-100 w-full lg:w-64 p-4 flex-shrink-0">
        <h2 class="text-3xl text-center  text-black mb-4">Eventos</h2>
        <ul>
          <li
            v-for="(event, index) in events"
            :key="index"
            @click="selectEvent(index)"
            :class="[
              'p-3 rounded-lg mb-2 cursor-pointer text-center transition-all',
              selectedEventIndex === index
                ? 'bg-magenta text-white'
                : 'bg-yellow text-magenta hover:border-magenta hover:border-2'
            ]"
          >
            {{ event.name }}
          </li>
        </ul>
      </aside>
  
      
      <main class="flex-1 p-6">
        <h2 class="text-3xl text-black mb-6">Detalles del Evento</h2>
  
        <!-- Detalles del Evento -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label >Nombre del Evento</label>
            <input
              v-model="selectedEvent.name"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="text"
            />
          </div>
          <div>
            <label >Lugar del Evento</label>
            <input
              v-model="selectedEvent.location"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="text"
            />
          </div>
          <div class="md:col-span-2">
            <label >Descripción del Evento</label>
            <textarea
              v-model="selectedEvent.description"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label >Fecha del Evento</label>
            <input
              v-model="selectedEvent.date"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="date"
            />
          </div>
          <div>
            <label >Horario del Evento</label>
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
            <label >Correo Electrónico</label>
            <input
              v-model="selectedEvent.organizerEmail"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="email"
              disabled
            />
          </div>
          <div>
            <label >Número de Teléfono</label>
            <input
              v-model="selectedEvent.organizerPhone"
              class="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-700"
              type="text"
              disabled
            />
          </div>
        </div>
  
        <!-- Botones -->
        <div class="flex flex-col sm:flex-row justify-between mt-6 space-y-4 sm:space-y-0">
          <CustomButton @click="publishEvent" color="black" class="hover:shadow-black/50">Publicar Evento</CustomButton>
          <CustomButton @click="rejectEvent" color="red" class="hover:shadow-red/50">Rechazar Evento</CustomButton>
        </div>
      </main>
    </div>
  </template>
  
  <script>

import CustomButton from './components/CustomButton.vue';
  export default {
    components: {
      CustomButton
    },
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
  input{
    @apply rounded-lg;
  }
  label{

    @apply text-black;
    @apply block;
  }
  textarea{
    resize: none;
    @apply rounded-lg;
  }
  /* Personalización adicional si se requiere */
  </style>
  