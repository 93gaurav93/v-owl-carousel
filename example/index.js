import Vue from 'vue'
import carousel from  '../src/v-owl-carousel';

Vue.component('carousel', carousel)

new Vue({
    el: '#app'
})