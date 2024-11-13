<template>
    <div class="w-full sm:w-[80%] flex flex-col gap-4">
        <div class="rounded-xl text-black bg-rosy  sm:h-12 h-18 font-made-tommy flex ">
            <div class="search-section sm:w-1/5 w-[28%]" >
                <select name="" id="" class="bg-rosy outline-none focus:text-magenta w-full">
                    <option value="Todos">Todo México</option>
                    <option v-for="state in statesInMexico" :key="state" :value="state">{{ state }}</option>
                </select>
            </div>
            <div class="search-section sm:w-1/5 w-[27%]">
                <input type="text" placeholder="Cualquier fecha" class="bg-rosy outline-none cursor-pointer placeholder:text-black focus:text-magenta w-full" onfocus="(this.type='date')" onblur="(this.type='text')">

            </div>
            <div class="cursor-pointer flex items-center sm:w-3/5 w-[45%] p-2 sm:justify-between">
                <textarea name="" id="" class="bg-rosy outline-none placeholder:text-black focus:placeholder:text-magenta w-full h-[90%] text-wrap self-end" placeholder="Artista, evento, tipo de evento o inmueble"></textarea>
                <svg @click="search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 sm:size-8 ">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>

            </div>
        </div>
        <div v-if="areResultsVisible" class="bg-gradient-to-t from-[#87003f] from-10% to-magenta to-30% w-full  h-[400px] rounded-2xl overflow-y-scroll">
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
const areResultsVisible = ref(false)
const event = ref({img: 'https://i.pinimg.com/736x/de/17/5b/de175b2222cc1981b68fc3774c157d72.jpg', eventName: "The Eras Tour", eventType: "Concierto", state: "New York", venue: "Madison Square Garden", time: "8:00 PM", month: "Septiembre", day: "15", year: "2023", dayOfWeek: "Lunes"})
const statesInMexico = ref (['Aguascalientes','Baja California','Baja California Sur','Campeche','Chiapas','Chihuahua','Ciudad de México','Coahuila','Colima','Durango','Estado de México','Guanajuato','Guerrero','Hidalgo','Jalisco', 'Michoacán','Morelos','Nayarit','Nuevo León','Oaxaca','Puebla','Querétaro','Quintana Roo','San Luis Potosí','Sinaloa','Sonora','Tabasco','Tamaulipas','Tlaxcala','Veracruz','Yucatán','Zacatecas'])
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
    .to-magenta::-webkit-scrollbar {
    display: none;
    }
    input[type="date"]::-webkit-calendar-picker-indicator {

}
textarea{
    resize: none;

}
::placeholder{
    @apply text-sm;
    @apply sm:text-base;
}
select{
    @apply text-sm;
    @apply sm:text-base;
}

</style>