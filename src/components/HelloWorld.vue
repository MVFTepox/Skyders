<template >
  <h1>Hello World</h1>
  <div class="bg-black h-screen flex flex-wrap justify-center p-4 gap-12">
    <HomeEventItem v-for="item in arr" :key="item" :eventName="item.eventName" :eventType="item.eventType" :img="item.img"></HomeEventItem>
    <div class=" p-6">
      <CustomButton color="red">Hola</CustomButton>
    </div>
  </div>

  <p class="text-3xl">pagina de test</p>
  <p class="text-3xl">pagina de test</p>
  <p class="text-3xl">pagina de test</p>
</template>

<script setup>
import CustomButton from './CustomButton.vue';
import HomeEventItem from './HomeEventItem.vue';
const arr = [
  {img: "https://i.pinimg.com/736x/de/17/5b/de175b2222cc1981b68fc3774c157d72.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  {img: "https://i.pinimg.com/564x/03/0c/a2/030ca2afa8b5358993a95485b0a0bd2f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  {img: "https://i.pinimg.com/564x/03/0c/a2/030ca2afa8b5358993a95485b0a0bd2f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  {img: "https://i.pinimg.com/564x/03/0c/a2/030ca2afa8b5358993a95485b0a0bd2f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  ]
</script>