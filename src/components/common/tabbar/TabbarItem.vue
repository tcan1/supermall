<template>
  <div class="tabbarItem" @click="tabbaritemClick">
    <div v-if="!isActive"><slot name="icon"></slot></div>
    <div v-else><slot name="icon_active"></slot></div>
    <div :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "tab-bar-item",
  //父组件传参给子组件
  props:{
    path:String,//要跳转的路径
    ActiveColor:{//字体的颜色
      type:String,
      default:'red'
    }
  },
  computed:{
    //判断判断当前页面是否活跃
    isActive(){
      return this.$route.path.indexOf(this.path) != -1
    },
    //判断当前页面是否活跃并返回字体颜色
    activeStyle(){
      return this.isActive ? {color : this.ActiveColor} : {}
    }
  },
  methods:{
    //监听item的点击,并跳转到指定页面
    tabbaritemClick(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style scoped>
.tabbarItem{
  flex: 1;
  height: 49px;
  font-size: 14px;
}
.tabbarItem img{
  height: 30px;
  width: 30px;
  vertical-align: middle;
}
.text{
  margin-top: 2px;
}
</style>
