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

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL

Vue.use(VueAxios, axios);

const routes = [

  {
    name:'/',
    path:'/',
    component: Home
  },
  {
    name:'/contacts',
    path:'/contacts',
    component: ContactList
  }
]

const router = new VueRouter({mode:'history',routes:routes});

 new Vue(Vue.util.extend({router},App)).$mount('#app');
