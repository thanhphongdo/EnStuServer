import Vue from 'vue';
// import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import 'parse/dist/parse.min.js';
import 'materialize-css/dist/js/materialize.min.js'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/helper.scss';
import './assets/css/color.scss';
import './assets/css/main.scss';
import * as Parse from './services/parse';
// var Parse = require('parse/dist/parse.min.js');
// declare var Parse: any;
// console.log(Parse);

Vue.config.productionTip = false;

Vue.prototype.Parse = Parse.init();
console.log(Vue.prototype.Parse);
import { Topic } from './models/index';
Parse.cloud('listTopic', {}).then(res => {
  var data = Parse.deserializeArray<Topic>(Topic, Parse.toJSON(res.data))[0];
  if (data.source) {
    console.log(data.source.name);
  }
}).catch(err => {
  console.log(err);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
