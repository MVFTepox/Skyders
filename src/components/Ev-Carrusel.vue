<template>
  <div class="eventos-container">
    <p class="eventos-titulo">Eventos Más Populares</p>
  </div>
  <div class="carrusel-container">
    <div class="carrusel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carrusel-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Evento imagen" class="carrusel-img" />
      </div>
    </div>
    <!-- Botones de navegación -->
    <button class="carrusel-btn prev" @click="goPrev">←</button>
    <button class="carrusel-btn next" @click="goNext">→</button>
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
  font-size: 38px;
  padding-top: 3%;
  padding-bottom: 1%;
  color: aliceblue;
}

.carrusel-container {
  position: relative;
  width: 100vw;
  height: 400px;
  overflow: hidden;
}

.carrusel {
  display: flex;
  transition: transform 0.5s ease;
}

.carrusel-item {
  min-width: 100%;
  height: 100%;
}

.carrusel-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carrusel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  font-size: 2em;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
}

.carrusel-btn.prev {
  left: 10px;
}

.carrusel-btn.next {
  right: 10px;
}

.carrusel-btn:hover {
  background-color: rgba(0, 0, 0, 0.8);
}
</style>