// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import api from './httpApi/api'
import util from './util/util'
import './httpApi/fetch'
import VCharts from 'v-charts'
import BaiduMap from 'vue-baidu-map'
Vue.use(BaiduMap, {
    ak: 'dcsylBb7nOrDMqsh0K0uekos9WoGGr8C'
});
Vue.use(VCharts)


Vue.prototype.$api = api;
Vue.prototype.$util = util;

import store from './store/store'

//引入css重置样式
import './assets/css/init.css'

//引入View组件
import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})