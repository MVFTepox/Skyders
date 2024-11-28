<template>
    <div>
    
    </div>
        <div v-if="isSelected"  class="flex w-full z-50 justify-center  fixed ">
            <EventPopup @close-popup="isSelected = false" @keyup.esc="isSelected=false"  :id="props.id"  class="absolute bottom-0 " ></EventPopup>
        </div>
        <div class="container z-40 sm:h-96 h-84 sm:w-1/5 w-[80%] ">
            <img :src="props.img" :alt="props.eventName" @click="isSelected = !isSelected" class=" w-full h-[80%] object-cover cursor-pointer">
            <div class="text-white mt-2">
                <h3 class="font-bold hover:underline cursor-pointer">{{props.eventName}}</h3>
                <p class="font-light text-sm">{{props.eventType}}</p>
            </div>
        </div>

</template>

<script setup>
import { ref,defineProps } from 'vue'
import EventPopup from './EventPopup.vue';

const props = defineProps({
    img: String,
    eventName: String,
    eventType: String,
    id: Number
    // Usar la id para hacer un get de solamente 1 evento para el popup
 })

const isSelected = ref(false)
</script>

<style scoped>
.container{
    @apply p-4;
    @apply font-made-tommy;
    @apply transition-shadow;
    @apply duration-500;
    @apply ease-in-out;
    @apply rounded-2xl;
}
.container:hover{
    box-shadow: 0 6px 15px -1px white, 0 5px 6px 0px white;
    /* @apply shadow-lg;
    @apply shadow-white; */
}
</style>