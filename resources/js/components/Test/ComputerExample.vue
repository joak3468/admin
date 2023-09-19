<template>
    <p v-custom-size:lg>directiva con argumento</p>
    <p v-custom-font.sm.red>directiva con modifcadores</p>
    <p v-custom-font.lg.green>directiva con modifcadores</p>


    <div>
        <input type="text" v-model="message">
        <h3 v-fount-size>{{ message }}</h3>
        <h3 v-custom-size="90">{{ reverse }}</h3>

    </div>
</template>

<!-- <script>
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ComputedExample',
        data(){
            return {
                message : '',
            }
        }, 
        computed: {
            reverse() {
                return this.message.split('').reverse().join('');
            }
        }
    });
</script> -->

<script setup>
//composition api
    import { ref, computed } from 'vue';
    let message = ref('');
    const reverse = computed(() => message.value.split('').reverse().join(''));
</script>

<style scoped>

</style>