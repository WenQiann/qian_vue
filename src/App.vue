<template>
  <div id="app">
    <Header class="header"></Header>
    <!-- <Home class="home"></Home> -->
    <router-view class="home"></router-view>
    <!-- <router-view /> -->
    <Footer class="footer"></Footer>
    
  </div>
</template>
<script>
import Header from "./views/Header.vue";
import Home from "./views/Home.vue";
import Footer from "./views/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer
  },
};
</script>

<style>
</style>
