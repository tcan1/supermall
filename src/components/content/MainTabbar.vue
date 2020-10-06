<template>
  <div class="maintabbar">
    <tab-bar>
      <tab-bar-item path="/home" ><!--可传入字体的颜色  默认red     例如:ActiveColor="blue"-->
        <img slot="icon" src="~assets/img/tabbar/home.png" alt="">
        <img slot="icon_active" src="~assets/img/tabbar/home_active.png" alt="">
        <div slot="text" class="text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" >
        <img slot="icon" src="../../assets/img/tabbar/category.png" alt="">
        <img slot="icon_active" src="../../assets/img/tabbar/category_active.png" alt="">
        <div slot="text" class="text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/carts" >
        <img slot="icon" src="../../assets/img/tabbar/carts.png" alt="">
        <img slot="icon_active" src="../../assets/img/tabbar/carts_active.png" alt="">
        <div slot="text" class="text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" >
        <img slot="icon" src="../../assets/img/tabbar/profile.png" alt="">
        <img slot="icon_active" src="../../assets/img/tabbar/profile_active.png" alt="">
        <div slot="text" class="text">我的</div>
      </tab-bar-item>
    </tab-bar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import tabbar from '../common/tabbar/tab-bar'  //@相当于src路径
import tabbaritem from '../common/tabbar/TabbarItem'
export default {
  name: "MainTabbar",
  components:{
    'tab-bar':tabbar,
    'tab-bar-item':tabbaritem
  }
}
</script>

<style scoped>
.maintabbar{
  /*box-shadow: 0 1px 1px rgba(100,100,100,.1);*/

}
</style>
