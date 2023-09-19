/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

import { createApp } from 'vue';
import router from '@/router';
import { createPinia } from 'pinia';

const appUrl = document.querySelector('meta[name="app-url"]').getAttribute('content');

const pinia = createPinia();


//import ExampleComponent from './components/Test/ExampleComponent.vue';
//app.component('example-component', ExampleComponent);

//app.mount('#app');

import ComputerExample from './components/Test/ComputerExample.vue';
createApp({ components: { ComputerExample } }).mount('#computerExample');

import VideoSixExample from './components/Test/VideoSixExample.vue';
createApp({ components: { VideoSixExample } }).mount('#videoSixExample');



//import PostList from './components/Test/PostList.vue';
//createApp({ components: { PostList } }).mount('#postList');




//import CycleOption from './components/Test/CycleOption.vue';
//createApp({ components: { CycleOption } }).mount('#cycleOption');


// import PostContainer from './components/Test/PostContainer.vue';
// createApp({ components: { PostContainer } }).mount('#PostContainer');


// import CounterOptions from './components/Test/CounterOptions.vue';
// createApp({ components: { CounterOptions } }).mount('#app');

// import ExampleSelective from './components/Test/ExampleSelective.vue';
// createApp({ components: { ExampleSelective } }).mount('#example-selective');


// import ClassBind from './components/Test/ClassBind.vue';
// createApp({ components: { ClassBind } }).mount('#classBind');




// import ModelForm from './components/Test/ModelForm.vue';
// createApp({ components: { ModelForm } }).mount('#modelForm');




// import TeacherForm from './components/Test/TeacherForm.vue';
// createApp({ components: { TeacherForm } }).mount('#teacherForm');



//app.mount('#postCountainer');
//import AppComponent from './components/Test/App.vue';
//createApp(AppComponent).mount("#");



import Main from './App.vue';

const main = createApp(Main);
// ##crear una directiva
main.directive('fount-size', {
    beforeMount: (el, binding) => {
        el.style.fontSize = "70px"
    }
});
// ##directiva con valores.
// main.directive('custom-size', {
//     beforeMount: (el, binding) => {
//         el.style.fontSize = binding.value + "px";
//     }
// });

//directiva con value + argumento
main.directive('custom-size', {
    beforeMount: (el, binding) => {
        let size = 18;
        switch(binding.arg){
            case 'sm':
                size = 10;
                break;
            case 'md':
                size = 18;
                break;
            case 'lg':
                size = 20;
                break;                    
        }
        el.style.fontSize = size + "px";
    }
});

//directiva con modificadores
main.directive('custom-font', {
    beforeMount: (el, binding) => {
        let size = 18;

        if(binding.modifiers.sm)
            size = 10;
        else if (binding.modifiers.lg)
            size = 20;
        
        el.style.fontSize = size + "px";
        

        if(binding.modifiers.red)
            el.style.color = "#ff0000";
        else if(binding.modifiers.green)
        el.style.color = "#00ff00";

    }
});


main.use(router).use(pinia).mount('#main');
