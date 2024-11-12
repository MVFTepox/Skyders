<template>
    <div class="w-full sm:w-[80%] flex flex-col gap-4">
        <div class="rounded-xl text-black bg-rosy  sm:h-12 h-18 font-made-tommy flex ">
            <div class="search-section" @click="openStateMenu">Todo México</div>
            <div class="search-section">
                Cualquier fecha
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sm:size-6 size-12">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                </svg>
            </div>
            <div class="cursor-pointer flex items-center p-2 sm:justify-between">
                Artista, evento, tipo de evento o inmueble
                <svg @click="search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="sm:size-6 size-12 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </div>
        </div>
        <select name="" id="" v-if="isStateMenuOpen">
            <option value="so">Estados</option>
        </select>
        <input type="date" name="" id="">
        <div v-if="areResultsVisible" class="bg-magenta w-full  h-[400px] rounded-2xl overflow-y-scroll">
            <SearchResultItem v-for="item in 3" :key="3" :img="event.img" 
            :eventName="event.eventName" 
            :eventType="event.eventType" 
            :state="event.state" 
            :venue="event.venue" 
            :time="event.time" 
            :month="event.month" 
            :day="event.day" 
            :year="event.year" 
            :dayOfWeek="event.dayOfWeek">
            </SearchResultItem>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchResultItem from './SearchResultItem.vue';
const areResultsVisible = ref(true)
const isStateMenuOpen = ref(false)
const event = ref({img: 'https://i.pinimg.com/736x/de/17/5b/de175b2222cc1981b68fc3774c157d72.jpg', eventName: "The Eras Tour", eventType: "Concierto", state: "New York", venue: "Madison Square Garden", time: "8:00 PM", month: "Septiembre", day: "15", year: "2023", dayOfWeek: "Lunes"})
function openStateMenu(){
    isStateMenuOpen.value = !isStateMenuOpen.value
}
function search(){
    areResultsVisible.value = !areResultsVisible.value
}
</script>

<style  scoped>
    .search-section{
        @apply border-r-[1px];
        @apply border-black;
        @apply cursor-pointer;
        @apply p-2;
        @apply flex;
        @apply items-center;
        @apply gap-4;
    }
    svg:hover{
        @apply text-magenta;
    }
    .bg-magenta::-webkit-scrollbar {
    display: none;
    }
</style>