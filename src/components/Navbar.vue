<template>
  <b-navbar toggleable="md" type="dark" class="bg-background-2" sticky>
    <router-link to="/" class="navbar-brand">
      <b-img alt="ASE Logo" src="@/assets/logo.svg" />
    </router-link>
    <b-collapse is-nav id="nav_collapse" class="text-center">
      <b-navbar-nav>
        <router-link v-for="routes in links"
            v-bind:key="routes.id" :to="`${routes.page}`"
            tag="b-nav-item" active-class="active" exact>
          <a class="nav-link">{{routes.text}}</a>
        </router-link>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <span>User</span>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/',
        },
        {
          id: 1,
          text: 'Register',
          page: '/register',
        },
        {
          id: 2,
          text: 'Store',
          page: '/store',
        },
        {
          id: 3,
          text: 'About',
          page: '/about',
        },
      ],
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.navbar-toggler {
  position: absolute;
  right:0;
  top: 0;
  margin-top: 0.6rem;
  margin-right: 1rem;
}

.navbar-dark .navbar-nav .nav-item.active .nav-link {
  color: rgba($color: #fff, $alpha: 1.0);
}

.navbar-brand > img {
  height: 2rem;
}
</style>
