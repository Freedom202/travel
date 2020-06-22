<template>
  <div id="app">
    <!-- router-view显示的是当前路由地址所对应的内容 -->
    <keep-alive exclude="Detail"> 
<!--页面被keep-alive包裹起来，就会是页面的资源加载到内存当中，不需要重新渲染，也不需要从新执行钩子，来回返回页面也只会获取一次json--> 
<!--exclude="Detail"除了Detail不被缓存   （include包括，exclude排除）-->
        <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
