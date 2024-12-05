<template>
  <div v-if="isSelected"  class="fixed inset-0 flex justify-center items-center z-50">
    <EventPopup @close-popup="isSelected = false" @keyup.esc="isSelected=false"   class="absolute bottom-0 " ></EventPopup>
  </div>
  <div class="evento-contenedor-fluid font-made-tommy">
    <div class="flex sm:flex-row flex-col items-center">
      <div class="ev items-center  sm:w-1/2 w-full p-4">
        <img :src="imagen" alt="Imagen del evento" class="evento-imagen hidden sm:block" />
        <div class="text-center sm:text-left">
          <h2 class="text-3xl text-magenta" >{{ nombre }}</h2>
          <p class="evento-descripcion">{{ descripcion }}</p>
        </div>
      </div>
      <div class="evento-countdown sm:w-1/2 w-full">
        <h5 class="font-made-tommy text-magenta text-3xl font-bold">Se acaba el tiempo...</h5>
        <div class="text-black" style="font-size: 28px;">{{ countdown }}</div>
      <CustomButton @click="isSelected = !isSelected" color="magenta" class="hover:shadow-magenta/50">Conocer más</CustomButton>
    </div>
    </div>
  </div>
  <EvCarrusel />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import EvCarrusel from './Ev-Carrusel.vue';
import CustomButton from './CustomButton.vue';
import EventPopup from './EventPopup.vue';
const imagen = ref(
  'https://i.pinimg.com/736x/19/13/5e/19135ea2f290c501b8fbabaebdd384ca.jpg'
);
const nombre = ref('Zoé Tour México 2025');
const descripcion = ref(
  'Zoé regresa a los escenarios de México con su nueva Gira 2025. Con más de dos décadas de trayectoria y éxitos que han marcado a varias generaciones, Zoé promete una serie de conciertos inolvidables, llenos de energía, psicodelia y nostalgia.'
);
const fechaEvento = ref(new Date('2024-12-12T23:59:59'));
const countdown = ref('');
const isSelected = ref(false);

const calculateTimeRemaining = () => {
  const now = new Date();
  const diff = fechaEvento.value - now;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  return { dias, horas, minutos, segundos };
};

const startCountdown = () => {
  setInterval(() => {
    const remaining = calculateTimeRemaining();
    countdown.value = `${remaining.dias} días, ${remaining.horas} horas, ${remaining.minutos} minutos, ${remaining.segundos} segundos`;
  }, 1000);
};

onMounted(() => {
  startCountdown();
});
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.evento-contenedor-fluid {
  @apply p-6;
  @apply bg-rosy;
  @apply w-screen;
}

.ev {
  display: flex;
  flex-direction: row;  
  @apply items-center;
  @apply gap-8;
}

.evento-imagen {
  @apply w-80;
  @apply h-72;
  @apply object-cover;
  /* width: 180px;  
  height: auto; */
  /* max-width: 100%;  Asegura que la imagen no se desborde */
  /* object-fit: cover;  Hace que la imagen cubra el contenedor sin deformarse */
  /* margin-top: 3%;
  visibility: visible; */
}
.evento-descripcion {
  font-size: 1.2em;
  color: #666;
}

.evento-countdown {
  margin-top: 2%;
  text-align: center;
}


button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #970046;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #7c003d;
}

</style>