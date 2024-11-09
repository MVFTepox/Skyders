<template>
        <button :class="[`bg-${props.color}`,'hover:shadow-lg', `hover:shadow-${props.color}/50`, 'hover:scale-105' ]"><slot></slot></button>
</template>

<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
    color: String
})
</script>

<style scoped>
button{
    @apply rounded-lg;
    @apply font-made-tommy;
    @apply font-light;
    @apply text-lg;
    @apply text-white;
    @apply p-2;
    @apply w-56;
    @apply transition;
    @apply duration-500;
}

</style>