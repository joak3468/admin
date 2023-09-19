<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter" >Incrementar</button>
</template>

<script>
// OPTIONS API
//    import  { defineComponent } from 'vue';
//    export default defineComponent({
//        name: 'CounterOptions',
//        components: {},
//        data(){
//            let counter = 0;
//            return {counter};
//        },
//        methods: {
//            addCounter(){
//                this.counter++;
//            }
//        }
//    });


// COMPOSITION API


//import { defineComponent, ref } from 'vue';
//export default defineComponent({
//    name: 'CounterComposition',
//    setup(){
//        let counter = ref(0);
//        const addCounter = () => {
//            counter.value ++;
//        }
//        return { counter, addCounter };
//    }
//});
</script>



<script setup>
import { ref } from 'vue';
let counter = ref(0);
const addCounter = () => {
    counter.value ++;
}
</script>