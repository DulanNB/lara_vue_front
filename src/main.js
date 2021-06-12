require('./bootstrap');
import Vue from 'vue'
window.Vue = require('vue');
axios.defaults.baseURL = 'http://127.0.0.1:8000';
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
