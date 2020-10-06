<template>
  <div class="nve-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
name: "NveBar"
}
</script>

<style scoped>
.nve-bar {
  height: 44px;
  line-height: 44px;
  display: flex;
  text-align: center;
}
.left{
  width: 60px;
  /*background: red;*/
}
.right{
  width: 60px;
  /*background: red;*/
}
.center{
  flex: 1;
  /*background: rosybrown;*/
}
</style>
