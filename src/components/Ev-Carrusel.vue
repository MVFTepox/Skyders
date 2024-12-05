<template>
  <div class="eventos-container">
    <p class="eventos-titulo">Eventos Más Populares</p>
  </div>
  <div class="carrusel-container">
    <div class="carrusel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carrusel-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Evento imagen" class="w-screen h-[400px] object-contain object-scale-down" />
      </div>
    </div>
    <!-- Botones de navegación -->
    <button class="carrusel-btn prev" @click="goPrev">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
    </button>
    <button class="carrusel-btn next" @click="goNext">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Imágenes del carrusel
const images = [
  'https://resourceboy.com/wp-content/uploads/2022/08/black-and-yellow-modern-music-night-dj-event-party-flyer-template.jpg',
  'https://i.pinimg.com/originals/00/af/5f/00af5fbca86b14de8571e840172b4236.png',
  'https://hunterae.com/wp-content/uploads/images/dynamic-music-event-promo-edm-festival-opener-night-club-party-invitation-typography-intro-39944847-videohive-download-free-hunterae-com-12.jpg',
  'https://resourceboy.com/wp-content/uploads/2023/03/tropical-retro-sunset-party-event-flyer-template.jpg',
];

// Índice actual del carrusel
const currentIndex = ref(0);

// ID del intervalo para auto-slide
let intervalId = null;

// Función para avanzar al siguiente slide
const goNext = () => {
  currentIndex.value = (currentIndex.value + 1) % images.length;
};

// Función para retroceder al slide anterior
const goPrev = () => {
  currentIndex.value = (currentIndex.value - 1 + images.length) % images.length;
};

// Iniciar el auto-slide
const startAutoSlide = () => {
  intervalId = setInterval(() => {
    goNext();
  }, 8000);
};

// Montar y desmontar el auto-slide
onMounted(() => {
  startAutoSlide();
});

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.eventos-container {
  background-color: black;
  text-align: center;
  margin: 0;
  padding: 0;
}

.eventos-titulo {
  @apply text-3xl;
  @apply font-bold;
  @apply p-6;
  @apply text-white;
  @apply font-made-tommy;
}

.carrusel-container {
  position: relative;
  width: 100vw;
  height: 400px;
  overflow: hidden;
}

.carrusel {
  display: flex;
  @apply items-start;
  transition: transform 0.5s ease;
}

.carrusel-item {
  min-width: 100%;
  height: 100%;
}


.carrusel-btn {
  @apply flex;
  @apply items-center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  @apply bg-magenta;
  color: white;
  font-size: 2em;
  border: none;
  @apply p-2;
  @apply rounded-full;
  cursor: pointer;
  z-index: 10;
}

.carrusel-btn.prev {
  left: 10px;
}

.carrusel-btn.next {
  right: 30px;
}

.carrusel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>