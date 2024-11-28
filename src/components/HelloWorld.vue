<template >
  <div class="bg-black h-[100%] flex flex-wrap justify-center gap-12">
    <div class="flex flex-col gap-4 p-6 w-full items-center">
      <!-- <EventPopup img="https://i.pinimg.com/564x/03/0c/a2/030ca2afa8b5358993a95485b0a0bd2f.jpg" isliked="true" /> -->

      <!-- <SearchBar></SearchBar> -->
      
    </div>
    <HomeEventItem v-for="item in arr" :key="item" :eventName="item.eventName" :eventType="item.eventType" :img="item.img"></HomeEventItem>
  </div>
  <div class="bg-black flex justify-center">

  </div>


</template>

<script setup>
import { ref } from 'vue';
import CustomButton from './CustomButton.vue';
import HomeEventItem from './HomeEventItem.vue';
import SearchResultItem from './SearchResultItem.vue';
import SearchBar from './SearchBar.vue';
import EventPopup from './EventPopup.vue';
const arr = [
  {img: "https://i.pinimg.com/736x/66/da/7d/66da7d37a993cf458796ed5eca2de17f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  {img: "https://i.pinimg.com/736x/66/da/7d/66da7d37a993cf458796ed5eca2de17f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  {img: "https://i.pinimg.com/736x/66/da/7d/66da7d37a993cf458796ed5eca2de17f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
  {img: "https://i.pinimg.com/736x/66/da/7d/66da7d37a993cf458796ed5eca2de17f.jpg", eventName: "The Eras Tour", eventType: "Concierto"},
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