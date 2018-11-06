<template>
  <div class="home">
    <div class="header">
      <b-img src="@/assets/background.jpg"/>
    </div>
    <Navbar />
    <div style="height:1500px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'home',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
.header {
    height: 50vh;
    width: 100vw;
    overflow: hidden;
}
</style>
