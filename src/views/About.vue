<template>
  <div class="about">
    <Header background="background2.jpg" />
    <Navbar />
    <b-container>
      <b-row>
        <b-col>
          <h1>ABOUT US</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="8"><div style="height:100rem;"></div></b-col>
        <b-col></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Header from '@/components/Header.vue';

export default {
  name: 'about',
  components: {
    Navbar,
    Header,
  },
};
</script>
