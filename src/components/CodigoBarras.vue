<template>
    <router-link to="/QRCODE" exact class="router">Barras</router-link>
    <div class="qr-container">
      <svg id="barcode"></svg>
      
      <button @click="togglePaymentStatus">
        Cambiar estado a {{ paymentStatus === 'pagado' ? 'no pagado' : 'pagado' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import JsBarcode from "jsbarcode";
  import { ref, onMounted } from "vue";
  
  // Inicializar estado de pago
  const paymentStatus = ref('no pagado');
  
  // Cambiar estado de pago
  function togglePaymentStatus() {
    paymentStatus.value = paymentStatus.value === 'pagado' ? 'no pagado' : 'pagado';
    generarCodigoBarras(); // Actualizar el código de barras después de cambiar el estado
  }
  
  // Generar el código de barras
  function generarCodigoBarras() {
    const svgElement = document.getElementById("barcode");
  
    if (svgElement) {
      // Usar el estado de pago para generar el código de barras
      JsBarcode(svgElement, paymentStatus.value, {
        format: "CODE128",
        width: 2,
        height: 40,
        displayValue: false // No mostrar el valor numérico del código de barras
      });
    } else {
      console.error("No se pudo encontrar el elemento SVG para generar el código de barras.");
    }
  }
  
  // Generar el código de barras al montar el componente
  onMounted(() => {
    generarCodigoBarras(); // Generar el código de barras inicialmente con el estado de pago por defecto
  });
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