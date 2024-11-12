<template>
    <div class="w-full flex items-center h-48 p-4 px-8 gap-6 sm:gap-12 border-b-[1px] border-white cursor-pointer font-made-tommy">
        <img :src="props.img" alt="" class="w-[15%] h-full object-cover object-center">
        <div class="flex flex-col gap-4">
            <p class="text-yellow text-md">{{ props.eventType }}</p>
            <h3 class="font-bold text-2xl text-white">{{ props.eventName }}</h3>
        </div>
        <div class="flex flex-col text-xl  items-center text-white">
            <p>{{ props.month }}</p>
            <p class="font-bold text-2xl">{{ props.day }}</p>
            <p>{{ props.year }}</p>
        </div>
        <div class="flex flex-col gap-4 text-md">
            <p class="text-yellow">{{props.dayOfWeek}} • {{ props.time }} </p>
            <p class="font-bold text-white">{{ props.state}} • {{ props.venue }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref,defineProps } from 'vue'
const props = defineProps({
    img: String,
    eventName: String,
    eventType: String,
    state: String,
    venue: String,
    time: String,
    month: String,
    day: String,
    year: String,
    dayOfWeek: String
})
// const isPM = ref(true)
// const PMOrAM = ref('')
// isPm === true ? PMOrAM = 'pm' : PMOrAM = 'am'
</script>

<style scoped>

</style>