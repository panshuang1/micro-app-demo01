import Vue from 'vue';
import ElementUI from 'element-ui';
// import BaiduMap from 'vue-baidu-map';
import Fragment from 'vue-fragment';
import router from './router';
import store from './store';
import './style/base.scss';
import './style/normal.css';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins';
import global from './plugins/ws';
import App from './App.vue';

Vue.prototype.global = global;

// Vue.use(BaiduMap, {
//   /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
//   ak: 'z3RtAGwdc5it0khxS31GdZqccsCCt6pD',
// });

Vue.use(ElementUI);
Vue.use(Fragment.Plugin);
Vue.config.productionTip = false;

Vue.prototype.$w = (px) => (document.body.offsetWidth / 3840) * px;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
