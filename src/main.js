// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'  //路由所对应的组件所在
import fastClick from 'fastclick' //解决（移动端开发）click 300ms延迟问题
import 'styles/reset.css'  //reset.css是基础样式设置，确保在各个浏览器下项目都是一样的显示效果
/*1像素边框问题（移动端）：对于多倍屏手机1px可能会显示出2px等效果
        border.css解决*/
import 'styles/border.css'
import 'styles/iconfont.css'//因为在webpack.base.config.js中配置了路径，所以此时可以用此路径，不然要用以下路径
//import './assets/styles/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import store from './store/index.js'


Vue.config.productionTip = false
fastClick.attach(document.body) //在body中使用 fastclick库
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,   //即store: 'store'，因为键和值相同，所以简写
  components: { App },
  template: '<App/>'
})

//路由就是根据网址的不同，返回不同的内容给用户