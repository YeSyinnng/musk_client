<template>
  <div id="app">
    <Header-nav class="HeaderNav"/>
    <router-view  class="viewContainer"/>
    <Footer class="Footer"/>
  </div>
</template>


<script>
import HeaderNav from '@/components/HeaderNav.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    HeaderNav,
    Footer
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 800px;
  .viewContainer{
    border:1px solid red; 
    width:80%;
    margin:0 auto;
    margin-top: 50px;
  }
  .HeaderNav{
    position: fixed;
    top:0;
    z-index: 100;
  }
  .Footer{
    position: fixed;
    bottom:0;
    left: 0;
    right:0;
    margin: auto;
    z-index: 100;
  }
}

</style>
