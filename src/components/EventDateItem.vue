<template>
    <div class="bg-magenta p-4  border-b-[1px]">
        <div @click="toggleActive" :class="{'selection-area': true,'sm:px-12':true,'p-4':true, 'px-6':true, 'bg-rosy' : itemIsActive == true, 'justify-between': itemIsActive == true, 'sm:gap-28': itemIsActive == false, 'gap-4': itemIsActive == false}">
            <div :class="{'text-white':itemIsActive === false,'text-black': itemIsActive === true, 'date' : true,'text-base' :true, 'sm:text-lg':true}">
                <p>Mes</p>
                <p class="font-bold">Dia</p>
                <p>2024</p>
            </div>
            <div :class="{'text-yellow':itemIsActive === false,'text-magenta': itemIsActive === true, 'flex' : true,  'flex-col' :true, 'text-center':true}">
                <p>Día Semana • Hora</p>
                <p class="font-bold">Estado • Inmueble</p>
            </div>
            <p :class="{'text-white':itemIsActive === false,'text-black': itemIsActive === true, 'text-lg':true, 'text-center':true}">$ 0000.00 MXN</p>
            <div class="flex" v-if="itemIsActive === true">
                <svg @click="decrement" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 cursor-pointer">
                    <path fill-rule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
                </svg>
                <input  type="number" v-model="quantity" class="w-8 text-center outline-none bg-transparent border-2 sm:mx-4 m-0 border-black rounded-lg">
                <svg @click="quantity++" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 cursor-pointer">
                    <path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref,defineProps } from 'vue'
const $emit = defineEmits(['isItemActive'])

const props = defineProps({})

const itemIsActive = ref(false)
function toggleActive() {
    itemIsActive.value = !itemIsActive.value;
    $emit('isItemActive', itemIsActive);
    console.log('emit enviado');
}
const quantity = ref(1)
function decrement() {
    if(quantity.value > 1) {
        quantity.value--;
    }
}

</script>

<style scoped>
.selection-area{
    @apply rounded-2xl;
    @apply flex;
    @apply font-made-tommy;
    @apply items-center;
}
.date{
    @apply flex;
    @apply flex-col;
    @apply justify-center;
    @apply items-center;
}

input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
}
</style>