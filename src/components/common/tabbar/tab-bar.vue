<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "tab-bar",
}
</script>

<style scoped>
.tabbar{
  display: flex;
  text-align: center;
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  background: #f6f6f6;
}
</style>
