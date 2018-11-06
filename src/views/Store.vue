<template>
  <div class="store">
    <Header background="background1.jpg" />
    <Navbar />
    <b-container>
      <b-row>
        <b-col cols="8"><div style="height:100rem;"></div></b-col>
        <b-col>2 of 2</b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'store',
  components: {
    Navbar,
    Header
  },
};

</script>

<style lang="scss">


</style>
