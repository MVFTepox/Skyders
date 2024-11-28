<template>
    <div class="font-made-tommy text-white text-wrap p-6 border-b-[1px]">
        <h6>{{ props.user }}</h6>
        <p class="font-light">{{ props.comment }}</p>

    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    user: String,
    comment: String
})

</script>

<style scoped>

</style>