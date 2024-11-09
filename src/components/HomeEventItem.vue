<template>
    <div class="container">
        <img :src="props.img" alt="" class="w-full h-[80%] object-cover cursor-pointer">
        <div class="text-white mt-2">
            <h3 class="font-bold hover:underline cursor-pointer">{{props.eventName}}</h3>
            <p class="font-light text-sm">{{props.eventType}}</p>
        </div>
    </div>
</template>

<script setup>
import { ref,defineProps } from 'vue'

const props = defineProps({
    img: String,
    eventName: String,
    eventType: String
 })
</script>

<style scoped>
.container{
    @apply w-1/5;
    @apply h-96;
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