import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VueAMap from 'vue-amap'

Vue.use(ElementUI);
Vue.use(VueAMap);
Vue.config.productionTip = false;

VueAMap.initAMapApiLoader({
    key: '2bde5cd8da1c0ab1d49553b12e8c7fac',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation', 'AMap.Geocoder']
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
