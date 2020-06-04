import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'  //@代表的src目录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',  //根路径
      name: 'Home',
      component: Home
    }
  ]
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



