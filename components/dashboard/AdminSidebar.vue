<template>
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
      <div class="sidebar-brand">
        <nuxt-link to="/home">Farm Marketplace</nuxt-link>
        <div id="close-sidebar">
          <i class="fas fa-times"></i>
        </div>
      </div>
      <div class="sidebar-header">
        <div class="user-pic">
          <img
            class="img-responsive img-rounded"
            :src="require('@/assets/img/user.jpg')"
            alt="User picture"
          >
        </div>
        <div class="user-info">
          <span class="user-name">
            <strong>Admin</strong><br>
          </span>
        </div>
      </div>
      <div class="sidebar-menu">
        <ul>
          <li class="header-menu">
            <span>General</span>
          </li>
          <li>
            <nuxt-link to="/vendors">
              <i class="fa fa-folder"></i>
              <span>Vendors</span>
            </nuxt-link>
          </li>

          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-id-card"></i>
              <span>Order Management</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li><nuxt-link to="#">Upgrade Order</nuxt-link></li>
              </ul>
            </div>
          </li>
          <li class="sidebar-dropdown">
            <a href="#">
              <i class="fa fa-id-card"></i>
              <span>Stockist Management</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li><nuxt-link to="#">Stockist Commission</nuxt-link></li>
                <li><nuxt-link to="#">Stockist Sales</nuxt-link></li>
              </ul>
            </div>
          </li>

          <li class="sidebar-dropdown">
            <a href="#">
              <i class="far fa-envelope"></i>
              <span>Message Control</span>
              <span class="badge badge-pill badge-danger">3</span>
            </a>
            <div class="sidebar-submenu">
              <ul>
                <li>
                  <nuxt-link to="/home">View Announcement</nuxt-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
      <!-- sidebar-menu  -->
    </div>
    <!-- sidebar-content  -->
    <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        <span class="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        <span class="badge badge-pill badge-success notification">7</span>
      </a>
      <nuxt-link to="/settings">
        <i class="fa fa-cog"></i>
        <span class="badge-sonar"></span>
      </nuxt-link>
      <a @click="$auth.logout()" href="#">
        <i class="fa fa-power-off"></i>
      </a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'AdminSidebar',
    data() {
      return {
        pckLevel: ''
      }
    },
    methods: {
      async getPackageLevel() {
        this.pckLevel = (await this.$axios.$get(`user/${this.userId}/packageLevel`)).data
      }
    },
    mounted() {
      // this.getPackageLevel()
    }
  }
</script>

<style scoped>

</style>
