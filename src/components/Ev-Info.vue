<template>
  <div class="evento-contenedor-fluid">
    <div class="evento-info">
      <div class="ev">
        <img :src="imagen" alt="Imagen del evento" class="evento-imagen" />
        <div class="evento-texto">
          <h2 class="evento-nombre" style="color: #970046;">{{ nombre }}</h2>
          <p class="evento-descripcion">{{ descripcion }}</p>
        </div>
      </div>
    </div>
    <div class="evento-countdown">
      <h5 class="made-tommy">Se acaba el tiempo...</h5>
      <div style="font-size: 28px;color: black;">{{ countdown }}</div>
      <button>Conocer más</button>
    </div>

  </div>
  <EvCarrusel />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import EvCarrusel from './Ev-Carrusel.vue';

export default defineComponent({
  name: 'EvInfo',
  components: {
    EvCarrusel,
  },
  data() {
    return {
      imagen: 'https://s3-alpha-sig.figma.com/img/4070/ca67/9e25563bda4d2283df553cc8a19c8ad9?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H8695KDsCIfLia6LpW9ySakq0PxkhA8WgNAueRtVVuETJMKFZZyE79vBC3CVjYgLSvDFioeKZYN6mEDsG~LO1AUxpLolRPwEO~iV4sMshLbgaqHjsGIW1m18VVyFF1CFVwgzMkJmVnr6p6Bu9j1cLLj85vU1hCqQ7JI-m2BIzPjMnD4jydRMb3WmPzKHMdc5gTM~X0j6DPRMXhfUNQaLsehDOm7JZ270HRKkrD80EWCZMPmIZut5ieYcfaagSyL8mzzTgof0NGaYgKwaWhz33Rrji5pZGpEVcKVBDnRIPq-rT1cLIdoRGOQak-7g9aeBu19ImA9YGciicLWjtwRyZg__', 
      nombre: 'Zoé Tour México 2025',
      descripcion: 'Zoé regresa a los escenarios de México con su nueva Gira 2025. Con más de dos décadas de trayectoria y éxitos que han marcado a varias generaciones, Zoé promete una serie de conciertos inolvidables, llenos de energía, psicodelia y nostalgia.',
      fechaEvento: new Date('2024-12-12T23:59:59'),
      countdown: '',
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      setInterval(() => {
        const remaining = this.calculateTimeRemaining();
        this.countdown = `${remaining.dias} días, ${remaining.horas} horas, ${remaining.minutos} minutos, ${remaining.segundos} segundos`;
      }, 1000);
    },
    calculateTimeRemaining() {
      const now = new Date();
      const diff = this.fechaEvento - now;

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((diff % (1000 * 60)) / 1000);

      return { dias, horas, minutos, segundos };
    }
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.evento-contenedor-fluid {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f7e7e7;
  width: 100vw;
}

.evento-info {
  display: flex;  
  width: 50%;  
  padding-right: 20px;
}

.ev {
  display: flex;
  flex-direction: row;  
  align-items: flex-start;  
}

.evento-imagen {
  width: 180px;  
  height: auto;
  max-width: 100%;  /* Asegura que la imagen no se desborde */
  object-fit: cover;  /* Hace que la imagen cubra el contenedor sin deformarse */
  margin-top: 3%;
  visibility: visible;
}

.evento-nombre {
  font-size: 2em;
  margin-top: 20px;
}

.evento-descripcion {
  font-size: 1.2em;
  color: #666;
  margin-top: 10px;
}

.evento-countdown {
  margin-top: 2%;
  width: 45%;  
  text-align: center;
}

.made-tommy {
  font-family: 'Made Tommy', sans-serif;
  color: #970046;
  font-size: 1.5em;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #970046;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #7c003d;
}

/* Estilos para pantallas pequeñas (móviles) */
@media (max-width: 1328px) {
  .evento-contenedor-fluid {
    flex-direction: column;
    padding: 10px;
  }

  .evento-info, .evento-countdown {
    width: 100%; 
    padding: 0;
  }

  .evento-imagen {
    display: none;  /* Oculta la imagen en pantallas pequeñas */
    visibility: hidden;
  }

  .ver-evento-btn {
    display: block;
    width: 100%;
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #970046;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .ver-evento-btn:hover {
    background-color: #7c003d;
  }
}
</style>