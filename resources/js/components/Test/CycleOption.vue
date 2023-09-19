<template>
    <div>
    </div>
</template>

<!-- <script>
//ciclo de vida en option api
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CycleOption",
    // data() {

    // },
    // methods: {

    // },
    created() {
        console.log("created");
    },
    mounted() {
        console.log("mounted");
    },
    updated() {
        console.log("updated");
    },
    unmounted() {
        console.log("unmounted");
    },

});

</script> -->


<script setup>
//Composition API
import { onMounted, onUpdated } from 'vue';

onMounted(() => {
    console.log("Mounted");
})



onUpdated(() => {
    console.log("Updated");
})
</script>

<style scoped>

</style>