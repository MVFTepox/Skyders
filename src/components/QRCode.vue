<template>
    <router-link to="/BRCODE" exact class="router">Barras</router-link>
    <div class="qr-container">
      <qrcode :value="paymentData" :size="300" />
      
      <button @click="togglePaymentStatus">
        Cambiar estado a {{ paymentStatus === 'pagado' ? 'no pagado' : 'pagado' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Qrcode from 'qrcode.vue';
  
  const paymentStatus = ref('no pagado');
  const paymentData = ref(getPaymentData(paymentStatus.value));
  
  function getPaymentData(status) {
    const subtotal = 250;
    const ivaRate = 0.16;
    const iva = subtotal * ivaRate;
    const total = subtotal + iva;
    return `
      Código: 1234567
      Estado: ${status}
      Monto: $${subtotal.toFixed(2)}
      Descripción: Boleto para evento
      Subtotal: $${subtotal.toFixed(2)}
      IVA: 16% ($${iva.toFixed(2)})
      Total: $${total.toFixed(2)}
      Destino de Pago: Banorte o OXXO
    `;
  }
  
  function togglePaymentStatus() {
    paymentStatus.value = paymentStatus.value === 'pagado' ? 'no pagado' : 'pagado';
    paymentData.value = getPaymentData(paymentStatus.value); 
  }
  </script>
  
  <style scoped>
  .router {
    position: absolute;
    left: 0%;
  }
  
  .qr-container {
    text-align: center;
    margin-top: 20%;
  }
  
  button {
    display: block;
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  p {
    font-size: 18px;
    margin-top: 10px;
    color: #333;
  }
  </style>