<template>
    <div>
        <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/Header'  //引入局部组件

export default {
    name: 'Home',
    components: {   //引用局部组件
        HomeHeader
        //或者 HomeHeader: HomeHeader
    }
}
</script>

<style scoped>

</style>











<!--<template>
<!-- 一个模板里只能有一个根目录，所以必须用一个大的div把它们都包裹着 
    <div>
        <div class='home'>home</div>
        <router-link to="/list" class='home'>列表页</router-link> <!--等同于a标签
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
    .home{
        font-size: 50px;
    }
</style>
-->

