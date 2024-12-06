<template>
    <div class="qr-container">
      <svg id="barcode"></svg>
      
      <button @click="togglePaymentStatus" style="color: white;" >
        Cambiar estado a {{ paymentStatus === 'pagado' ? 'no pagado' : 'pagado' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import JsBarcode from "jsbarcode";
  import { ref, onMounted } from "vue";
  
  // Inicializar estado de pago
  const paymentStatus = ref('no pagado');
  
  
  function togglePaymentStatus() {
    paymentStatus.value = paymentStatus.value === 'pagado' ? 'no pagado' : 'pagado';
    generarCodigoBarras(); 
  }
  
  
  function generarCodigoBarras() {
    const svgElement = document.getElementById("barcode");
  
    if (svgElement) {
      
      JsBarcode(svgElement, paymentStatus.value, {
        format: "CODE128",
        width: 2,
        height: 40,
        displayValue: false 
      });
    } else {
      console.error("No se pudo encontrar el elemento SVG para generar el código de barras.");
    }
  }
  
  
  onMounted(() => {
    generarCodigoBarras(); 
  });
  </script>
  
  <style scoped>
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