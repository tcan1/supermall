<template>
  <div id="app">
    <nev-bar class="nve-bar"><div slot="center">购物街</div></nev-bar>
    <MainTabbar></MainTabbar>
  </div>
</template>


<script>
import MainTabbar from '@/components/content/MainTabbar'
import NveBar from 'common/nvebar/NveBar'
export default {
  name: 'App',
  components: {
    MainTabbar,
    'nev-bar':NveBar
  }
}
</script>

<style>
@import "assets/css/base.css";
.nve-bar{
  color: #fff;
  background: #ff5777;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
</style>
