<template>
  <div class="p-4 w-full flex justify-start  bg-black">
    <div class=" mb-4">
      <img src="/public/img/skyders isotipo.png" alt="Logo" class="w-30 h-9" />
    </div>
  </div>
  <div class="min-h-screen bg-black text-white flex items-center justify-center px-4">
    <div
      class="bg-black font-made-tommy text-white w-full max-w-lg p-6 rounded-lg shadow-md border border-white/50 shadow-xl shadow-white  ">
      <h2 class="text-2xl font-light text-center mb-4 text-white">Organiza tu Evento</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <div>
          <label for="nombre" class="block mb-1 text-[#ffd182] font-made-tommy">Nombre del Evento</label>
          <input id="nombre" type="text" placeholder="Nombre del Evento" class="input-field text-black" />
        </div>

        <div>
          <label for="descripcion" class="block font-made-tommy mb-1 text-[#ffd182]">Descripción del Evento</label>
          <textarea id="descripcion" placeholder="Descripción del Evento"
            class="input-field h-24 text-black"></textarea>
        </div>


        <div>
          <label for="lugar" class="block font-made-tommy mb-1 text-[#ffd182]">Lugar del Evento</label>
          <input id="lugar" type="text" placeholder="Estadio, teatro, parque, etc." class="input-field text-black" />
        </div>


        <div>
          <label for="domicilio" class="block font-made-tommy mb-1 text-[#ffd182]">Domicilio del Lugar del
            Evento</label>
          <input id="domicilio" type="text" placeholder="Dirección del evento" class="input-field text-black" />
        </div>

        <div class="flex space-x-4">
          <div class="flex-1">
            <label for="fecha" class="block font-made-tommy mb-1 text-[#ffd182]">Fecha del Evento</label>
            <input id="fecha" type="date" class="input-field text-black" />
          </div>
          <div class="flex-1">
            <label for="horario" class="block font-made-tommy mb-1 text-[#ffd182]">Horario del Evento</label>
            <input id="horario" type="time" class="input-field text-black" />
          </div>
        </div>

        <div class="flex space-x-4">
          <div class="flex-1">
            <label for="tipo" class=" text-[#ffd182] block font-made-tommy mb-1">Tipo de Evento</label>
            <input id="tipo" type="text" placeholder="Concierto, partido, etc." class="input-field text-black" />
          </div>
          <div class="flex-1">
            <label for="asientos" class="block text-[#ffd182] font-made-tommy mb-1">Número de Asientos</label>
            <input id="asientos" type="number" min="1" placeholder="100" class="input-field text-black" />
          </div>
        </div>

        <div>
          <label for="imagen" class="block text-[#ffd182] font-made-tommy mb-1">Imagen del Evento</label>
          <input id="imagen" type="file" accept="image/*" @change="onFileChange"
            class="input-field cursor-pointer bg-pink-50 text-black border border-gray-700" />
        </div>
        <div v-if="imagePreview" class="mt-4">
          <p class="text-sm text-gray-400">Vista previa:</p>
          <img :src="imagePreview" alt="Vista previa" class="w-full h-48 object-cover rounded-md" />
        </div>


        <div class="space-y-2">
          <div class="flex items-center space-x-2">
            <input id="publicidad" type="checkbox" class="w-4 h-4 border-gray-600 text-pink-600 focus:ring-pink-500" />
            <label for="publicidad" class="text-sm">Manifiesto que estoy registrando el evento para hacer
              publicidad</label>
          </div>
          <div class="flex items-center space-x-2">
            <input id="mayores" type="checkbox" class="w-4 h-4 border-gray-600 text-pink-600 focus:ring-pink-500" />
            <label for="mayores" class="text-sm">Este evento es +18, sólo permitirá mayores de edad</label>
          </div>
        </div>


        <button type="submit "
          class="w-full text-lg  bg-magenta transition duration-500 text-white  rounded hover:shadow-lg hover:shadow-magenta/50 hover:scale-105 transition font-made-tommy font-light p-2 w-56 justify-center">
          Registrar Evento
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imagePreview: null,
    };
  },
  methods: {
    submitForm() {
      alert("Evento registrado");
    },
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.imagePreview = URL.createObjectURL(file);
      }
    },
  },
};

</script>

<style>
.input-field {
  @apply w-full p-2 bg-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-700 focus:border-pink-700;
}

input::placeholder {
  @apply text-magenta;
}

textarea::placeholder {
  @apply text-magenta;
}

textarea {
  resize: none;
}

label {
  @apply font-light;
}
</style>