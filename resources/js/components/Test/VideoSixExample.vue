<template>
    <div>
        <label>SubTotal</label>
        <input type="text" v-model="subtotal">
        <h3>Total inpuestos a pagar: {{ totalVat }} ({{ vat }}%)</h3>
    </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
    const vat = 21;
    let subtotal = ref(0);
    const totalVat = computed(() => (vat*subtotal.value) / 100)
</script>

<style scoped>

</style>