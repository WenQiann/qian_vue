import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import { Carousel,carouselItem } from "element-ui"
import ElementUi from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
// import "./utils/elementui.js"
import { Carousel } from 'element-ui';

// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
// Vue.use(Carousel);
// import {drag} from "../dist/js/header.js";
// Vue.prototype.$drag = drag
Vue.config.productionTip = false;
Vue.component(Carousel.name,Carousel)
// Vue.component(carouselItem.name,carouselItem)
Vue.use(ElementUi)
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
