/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';

import { createApp } from 'vue';
<<<<<<< HEAD
import router from './router';
import { createPinia } from 'pinia';
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';
import { VueCookies } from 'vue-cookies';

const appUrl = document.querySelector('meta[name="app-url"]').getAttribute('content');
=======
import router from '@/router';
import { createPinia } from 'pinia';

const appUrl = document.querySelector('meta[name="app-url"]').getAttribute('content');

>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
const pinia = createPinia();

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
<<<<<<< HEAD






=======
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
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


<<<<<<< HEAD
main.use(router).use(VCalendar, {}).use(VueCookies, {expires: '1d'}).use(pinia).mount('#main');
=======
main.use(router).use(pinia).mount('#main');
>>>>>>> 813d692f60df17c8f7fe51a2a39b62e05c458c8b
