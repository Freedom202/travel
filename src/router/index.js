import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'  //@代表的src目录
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({    //路由配置
  routes: [{
      path: '/',  //根路径
      name: 'Home',
      component: Home
    },{
      path: '/city',
      name: 'city',
      component: City
    },{
      path: '/detail/:id',   //动态路由，即后面可以带一个参数，参数放在id中
      name: 'Detail',
      component: Detail
    }],
    scrollBehavior (to, from, savedPosition) {  //路由滚动https://router.vuejs.org/zh/guide/advanced/scroll-behavior.html#异步滚动
      return { x: 0, y: 0 }
    }
})











// import Vue from 'vue'
// import Router from 'vue-router'
// // import HelloWorld from '@/components/HelloWorld'  HelloWorld对应的HelloWorld组件,本项目中把component文件夹删了
// import Home from '@/pages/home/Home'  //@代表的src目录
// import List from '@/pages/list/List'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',  //根路径
//       name: 'Home',
//       component: Home
//       // name: 'HelloWorld',
//       // component: HelloWorld  
//  /*当用户访问router的根路径时的访问组件是HelloWorld，HelloWorld中对应HelloWorld.vue文件，所以主页显示的是vue欢迎界面，即HelloWorld.vue*/
//      }, {
//       path: '/list',  
//       name: 'List',
//       component: List
//     }
//   ]
// })



