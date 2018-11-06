<template>
  <div class="home">
    <div class="header">
      <v-parallax
        height="600"
        src="@/assets/background.jpg"
        ></v-parallax>
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


</style>
