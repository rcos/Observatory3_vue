<template>
  <b-navbar toggleable="md" type="light">
    <b-navbar-brand href="#/">RCOS</b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <!-- Navbar Links -->
      <b-navbar-nav class="mr-auto">

        <!-- Public links -->
        <b-nav-item href="#/projects">Projects</b-nav-item>
        <b-nav-item href="#/users">Developers</b-nav-item>
        <b-nav-item href="#/blogs">Blog</b-nav-item>
        <b-nav-item href="#/achievements">Achievements</b-nav-item>
        <b-nav-item href="#/sponsors">Sponsors</b-nav-item>

        <!-- Authenticated links -->
        <b-nav-item href="#/main/attend" v-if="isAuthenticated">Attend</b-nav-item>

        <!-- Mentor Dropdown -->
        <b-nav-item-dropdown text="Mentor" right v-if="isAuthenticated">
          <b-dropdown-item href="#/mentor/verify">Verify</b-dropdown-item>
          <b-dropdown-item href="#/mentor/small_group">Small Group</b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- Admin Dropdown -->
        <b-nav-item-dropdown text="Admin" right v-if="isAuthenticated">
          <b-dropdown-item href="#/admin/attendance">Attendance</b-dropdown-item>
          <b-dropdown-item href="#/admin/users">Users</b-dropdown-item>
          <b-dropdown-item href="#/admin/settings">Settings</b-dropdown-item>
        </b-nav-item-dropdown>

      </b-navbar-nav>

      <!-- User Dropdown -->
      <b-navbar-nav class="ml-auto" v-if="isAuthenticated">
        <b-nav-item-dropdown right>
          <template slot="button-content">
            {{ currentUser.email }}
          </template>
          <b-dropdown-item href="#/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="#/settings">Settings</b-dropdown-item>
          <b-dropdown-item @click="logout()">Logout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

      <!-- Register / Login -->
      <b-navbar-nav v-else>
        <b-nav-item href="#/auth/register">Register</b-nav-item>
        <b-nav-item href="#/auth/login">Login</b-nav-item>
      </b-navbar-nav>

	  </b-collapse>
	</b-navbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Navbar',
  computed: mapGetters({
    isAuthenticated: 'auth/is_authenticated',
    currentUser: 'auth/current_user'
  }),
  methods: mapActions({
    logout: 'auth/logout'
  })
}
</script>

<style type="text/css">
  .navbar {
    background-color: #f3f3f3;
  }
</style>
