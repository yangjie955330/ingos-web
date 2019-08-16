<template>
  <div id="app">
    <!-- vue component mounted point -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};

</script>

<style>
  body {
    height: 100%;
    font-size: 14px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    font-family: Helvetica Neue, Helvetica, PingFang SC,
      Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
  }

</style>
