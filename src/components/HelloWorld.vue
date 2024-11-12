<template >
  <h1>Hello World</h1>
  <div class="bg-black h-screen flex flex-wrap justify-center gap-12">
    <HomeEventItem v-for="item in arr" :key="item" :eventName="item.eventName" :eventType="item.eventType" :img="item.img"></HomeEventItem>
    <div class="flex flex-col gap-4 p-6 w-full items-center">
      <SearchBar></SearchBar>
      
    </div>
  </div>

  <p class="text-3xl">pagina de test</p>
  <p class="text-3xl">pagina de test</p>
  <p class="text-3xl">pagina de test</p>
</template>

<script setup>
import { ref } from 'vue';
import CustomButton from './CustomButton.vue';
import HomeEventItem from './HomeEventItem.vue';
import SearchResultItem from './SearchResultItem.vue';
import SearchBar from './SearchBar.vue';
const arr = [
  {img: "https://i.pinimg.com/736x/de/17/5b/de175b2222cc1981b68fc3774c157d72.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  {img: "https://i.pinimg.com/564x/03/0c/a2/030ca2afa8b5358993a95485b0a0bd2f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  {img: "https://i.pinimg.com/564x/03/0c/a2/030ca2afa8b5358993a95485b0a0bd2f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  {img: "https://i.pinimg.com/564x/03/0c/a2/030ca2afa8b5358993a95485b0a0bd2f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  ]
</script>
<style scoped>

  .bg-magenta::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }
  
  .bg-magenta::-webkit-scrollbar-track {
    background: #970046;
    border: 1px solid #f7e7e7;
    border-radius: 20px ;
  }
  
  .bg-magenta::-webkit-scrollbar-thumb {
    background-color: #ffd182;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
 /* creates padding around scroll thumb */
  }

  .bg-magenta::-webkit-scrollbar {
  display: none;
}

</style>