<template>
    <div class="interactive-bg" ref="bg">
        <div class="flex justify-between p-6">
            <img src="/public/img/skyders isotipo.png" alt="" class="w-36">
            <button @click="router.push('/iniciar-sesion')" class=" font-made-tommy border-rosy hover:bg-rosy hover:text-black border-[1px] text-rosy p-2 rounded-lg flex gap-2"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Iniciar Sesión
            </button>
        </div>
        <div class=" h-full flex flex-col justify-center p-6 gap-12 items-center">

            <div class="font-made-tommy sm:w-2/3 w-full sm:h-[250px] flex flex-col gap-4 items-center sm:relative flex-none">
                <h1 class="sm:text-5xl text-4xl font-bold text-white text-start w-2/3">Con <span class="text-yellow">SKYDERS</span> prepárate para los eventos más emocionantes de México!</h1>
                <p class="text-lg text-white text-start sm:text-end sm:absolute sm:bottom-0 sm:w-1/3 w-2/3 sm:right-36">Encuentra boletos para todo tipo de eventos, en todo el país!</p>
            </div>
            <SearchBar></SearchBar>
        </div>
        <div>
          <EvInfo></EvInfo>
        </div>
    </div>
    <div class="bg-black flex flex-col p-4 items-center">
        <h2 class="text-3xl font-bold text-white font-made-tommy p-6">Todos los Eventos</h2>
        <div class="flex flex-wrap gap-8 justify-center">
          <HomeEventItem v-for="item in events" :key="item" eventName="item.Name" eventType="item.Type" img="item.imgEvent"></HomeEventItem>
          
        </div>
    </div>
</template>

<script setup>
import { ref,defineProps } from 'vue'

import { useEventStore } from '../Stores/eventsStore';

import SearchBar from '../components/SearchBar.vue';
import HomeEventItem from '../components/HomeEventItem.vue';
import EvInfo from '../components/Ev-Info.vue';
import { onMounted } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
let bg; // Reference for the background element

const Events = useEventStore();
const events = ref([]);
events.value = Events.fetchEvents();





onMounted(() => {
  document.addEventListener("mousemove", (e) => {
    // Calculate mouse coordinates as percentages
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;

    // Dynamically adjust gradient position and size
    bg.style.backgroundPosition = `${y}% ${y}%`;
    bg.style.backgroundSize = `${100 + x / 2}% ${100 + y / 2}%`;
  });
});
</script>

<style scoped>

.interactive-bg {

  background: radial-gradient(
    circle,
    rgba(255, 209, 130, 1) 3%,
    rgba(151, 0, 70, 1) 33%,
    rgba(0, 0, 0, 1) 57%
  );
  background-size: 150% 150%; /* Initial size of the gradient */
  transition: background-size 0.2s, background-position 0.2s; /* Smooth transitions */
  overflow: hidden;
}
</style>