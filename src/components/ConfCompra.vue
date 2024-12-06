<template>
    <div class="min-h-screen bg-black flex items-center justify-center">
      <div class="bg-white w-11/12 max-w-4xl rounded-lg shadow-lg p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Información del evento -->
          <div class="text-left space-y-4">
            <p class="text-lg font-bold">{{ selectedEvent.name }}</p>
            <p>Fecha: {{ selectedEvent.date }}</p>
            <p>Lugar: {{ selectedEvent.location }}</p>
            <p style="font-size: 30px;">Entrada General</p>
            <p class="text-base">
              Precio del Boleto: <span class="font-semibold">$ {{ selectedEvent.price.toFixed(2) }} MXN</span>
            </p>
            <p class="text-lg font-semibold">
              Total a Pagar: $ {{ selectedEvent.quantity * selectedEvent.price }} MXN
            </p>
            <!-- Enlace para enviar correo -->
            <a
              @click="sendEmail"
              class="cursor-pointer"
              style="font-size: 30px; color: #970046;"
            >
              Enviar boleto por correo
            </a>
            <p
              class="text-red-600 text-sm mt-2"
              style="color: #970046;"
            >
              Evento +18, para entrar presenta tu identificación oficial el día del evento.
              Boleto válido para la fecha mostrada. No compartas este boleto.
              Hacer cancelaciones vía skyders.support@gmail.com, antes del cierre de venta.
              Reembolsos disponibles dentro de primeras 24 horas desde compra.
            </p>
          </div>
          <!-- Código QR y Código de Barras -->
          <div
            class="flex flex-col items-center justify-center space-y-0"
            style="margin-top: -10%;"
          >
            <QRCode />
            <CodigoBarras />
          </div>
        </div>
    </div>
    <button @click="goToHome">Regresar al Inicio</button>
</div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  import QRCode from './QRCode.vue';
  import CodigoBarras from './CodigoBarras.vue';
  import { ref } from 'vue';

  const router = useRouter();
  
  // Evento seleccionado (simulado, en producción vendrá de un estado global o API)
  const selectedEvent = ref({
    name: 'Concierto de Rock',
    date: '10 de Diciembre, 2024',
    location: 'Auditorio Nacional, CDMX',
    price: 250,
    quantity: 1,
  });
  
  function goToHome() {
  router.push('/');
}

  // Función para enviar correo
  function sendEmail() {
    const subject = encodeURIComponent(`Boleto para ${selectedEvent.value.name}`);
    const body = encodeURIComponent(`
    Evento: ${selectedEvent.value.name}
    Fecha: ${selectedEvent.value.date}
    Lugar: ${selectedEvent.value.location}
    Entrada: General
    Precio: $${selectedEvent.value.price.toFixed(2)} MXN
    Total a Pagar: $${(selectedEvent.value.price * selectedEvent.value.quantity).toFixed(2)} MXN
    `);
    const recipient = 'user@example.com'; // Cambia por el correo del destinatario
    const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
  </script>
  
<style scoped>
a:hover{
    text-decoration: underline;
}
button {
    position: absolute;
  bottom: 5%;
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
</style>
  