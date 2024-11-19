<template>
        <button :class="[`bg-${props.color}`, 'hover:scale-105', 'hover:shadow-lg']" ><slot></slot></button>
</template>

<script setup>
import {defineProps } from 'vue'

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