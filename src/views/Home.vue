<template>
    <div class="top-container ">
        <div class="flex justify-between p-6">
            <img src="/public/img/skyders isotipo.png" alt="" class="w-36">
            <button class=" font-made-tommy border-rosy hover:bg-rosy hover:text-black border-[1px] text-rosy p-2 rounded-lg flex gap-2"> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Iniciar Sesión
            </button>
        </div>
        <div class=" h-full flex flex-col justify-center p-6 gap-12 items-center">
            <!-- <div class="font-made-tommy sm:w-1/2 w-full sm:h-[250px] flex flex-col gap-4 items-center sm:relative flex-none">
                <h1 class="text-4xl font-bold text-white text-start w-2/3">Con <span class="text-yellow">SKYDERS</span> prepárate para los eventos más emocionantes de México!</h1>
                <p class="text-lg text-white text-start sm:text-end sm:absolute sm:bottom-2 sm:w-1/2 w-2/3 sm:right-16">Encuentra boletos para todo tipo de eventos, en todo el país!</p>
            </div> -->
            <div class="font-made-tommy sm:w-2/3 w-full sm:h-[250px] flex flex-col gap-4 items-center sm:relative flex-none">
                <h1 class="sm:text-5xl text-4xl font-bold text-white text-start w-2/3">Con <span class="text-yellow">SKYDERS</span> prepárate para los eventos más emocionantes de México!</h1>
                <p class="text-lg text-white text-start sm:text-end sm:absolute sm:bottom-0 sm:w-1/3 w-2/3 sm:right-36">Encuentra boletos para todo tipo de eventos, en todo el país!</p>
            </div>
            <SearchBar></SearchBar>
        </div>
        
    </div>
    <div class="bg-black flex flex-wrap gap-8 p-4 justify-center">
        <HomeEventItem v-for="item in 5" :key="item" eventName="The Eras Tour" eventType="Concierto" img="https://i.pinimg.com/736x/66/da/7d/66da7d37a993cf458796ed5eca2de17f.jpg"></HomeEventItem>
    </div>
</template>

<script setup>
import { ref,defineProps } from 'vue'
import SearchBar from '../components/SearchBar.vue';
import HomeEventItem from '../components/HomeEventItem.vue';
</script>

<style scoped>
.top-container{
    /* background: rgb(255,209,130);
    background: radial-gradient(circle, rgba(255,209,130,1) 8%, rgba(151,0,70,1) 54%, rgba(0,0,0,1) 86%); */

    background: rgb(255,209,130);
background: radial-gradient(circle, rgba(255,209,130,1) 3%, rgba(151,0,70,1) 33%, rgba(0,0,0,1) 57%);
}
</style>