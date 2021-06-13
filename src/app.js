require('./bootstrap');
import Vue from 'vue'
window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import  App from './App.vue';
import  Home from './componants/Home.vue';
import  ContactList from './componants/ContactList.vue';

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

const routes = [

    {
        name:'/home',
        path:'/home',
        component: Home
    },
    {
        name:'/contacts',
        path:'/',
        component: ContactList
    }
]

const router = new VueRouter({mode:'history',routes:routes});

const app = new Vue(Vue.util.extend({router},App)).$mount('#app');
