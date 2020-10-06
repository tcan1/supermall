import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

// axios({
//   url:'http://152.136.185.210:8000/api/w6/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })
import {request} from './network/request'
request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
