<template>
    <div class="flex shadow-md" >
        <div class="rounded-2xl bg-magenta justify-center sm:w-[900px] sm:h-[450px] w-full h-full relative"> 
            <button class="text-rosy rounded-full absolute top-2 right-2 hover:text-white" @click="closePopup">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </button>
            <div class="flex gap-2 p-6 h-1/2">
                <div class="sm:w-36 w-1/2">
                    <img :src="props.img" alt="">
                </div>
                <div class="flex flex-col font-made-tommy gap-2 sm:w-2/3 w-1/2">
                    <p class="text-yellow text-sm">Tipo Evento</p>
                    <h2 class="text-white text-wrap">Nombre Evento</h2>
                    <div class="flex gap-4">
                        <svg v-if="isLiked===false" @click="isLiked=true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-yellow">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                        <svg v-if="isLiked===true" @click="isLiked=false"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6 text-yellow">
                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                        </svg>
                        <p class="indicators">Likes</p>
                        <p class="indicators">Comentarios</p>

                    </div>
                    <p class="font-light text-white text-wrap overflow-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaesque. Quisquam consectetur adipisicing elit. Quisquam, quaesque. Quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quaesque.</p>
                </div>
            </div>
            <div class="flex w-full ">
                <div  @click="tabIsActive = true" :class="{'tab' : true, 'border-b-[1px]' : tabIsActive === false}">Fechas</div>
                <div @click="tabIsActive = false" :class="{'tab' : true, 'border-b-[1px]' : tabIsActive === true}">Comentarios</div>
            </div>
            <div class="flex flex-col overflow-auto h-1/2 rounded-b-2xl" v-if="tabIsActive === true">
                <EventDateItem v-for="item in 3" :key="item" @is-item-active="isItemActive"/>
            </div>
            <div v-if="tabIsActive === false" class="rounded-b-2xl flex flex-col bg-magenta h-1/2 overflow-auto">
                <Comment user="Valeria" comment="Wow esta muy chido el concerito vale la pena chicos"/>
                <Comment user="user" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed hendrerit sapien. In vitae elit ex. Morbi lacinia augue eget luctus congue. Duis consequat urna ligula, ultricies lacinia neque suscipit vitae. Nam dui augue, venenatis ut ante vel, egestas sollicitudin urna. Sed id consequat est, vel efficitur orci. Curabitur sit amet vulputate purus, semper viverra lorem. Vestibulum dignissim et odio sed consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi eu sodales tellus. Mauris pellentesque sem sit amet arcu fermentum, et aliquet odio efficitur."/>
            </div>
            <CustomButton  v-if="isShown.value===true"  color="black" class="hover:shadow-black/50 absolute bottom-0 left-80">Continuar a Pago</CustomButton>
        </div>
    </div>
</template>

<script setup>
import CustomButton from './CustomButton.vue';
import EventDateItem from './EventDateItem.vue';
import Comment from './Comment.vue';
import { ref,defineProps } from 'vue';
const emit = defineEmits(['closePopup'])

const props = defineProps({
    isLiked: Boolean,
    img: String,
    id: Number
})
const tabIsActive = ref(true)
const isLiked = ref(props.isLiked)
const isShown = ref(false)
function isItemActive(value){
    isShown.value = value;
    console.log(value);
}
function closePopup(){
    emit('closePopup');
    console.log('close');
}

</script>

<style scoped>
.indicators{
    @apply text-white;
    @apply text-sm
}
img{
    @apply object-cover;
    @apply object-center;
    @apply h-full;
}
.tab{
    @apply border-x-[1px];
    @apply border-t-[1px];
    @apply border-white;
    @apply cursor-pointer;
    @apply text-white;
    @apply w-1/2;
    @apply px-6;
    @apply text-lg;
    @apply font-made-tommy;
}
*::-webkit-scrollbar {
    display: none;
    }
</style>