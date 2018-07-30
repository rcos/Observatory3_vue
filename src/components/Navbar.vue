<template>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
    <b-navbar-brand href="#/">
      Observatory
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <!-- Navbar Links -->
      <b-navbar-nav class="mr-auto">

        <!-- Public links -->
        <b-nav-item href="#/projects">Projects</b-nav-item>
        <b-nav-item href="#/users">Developers</b-nav-item>
        <!-- <b-nav-item href="#/blogs">Blog</b-nav-item> -->
        <!-- <b-nav-item href="#/sponsors">Sponsors</b-nav-item> -->
        <!-- <b-nav-item href="#/faq">FAQ</b-nav-item> -->

        <!-- Authenticated links -->
        <b-nav-item href="#/attendance" v-if="isAuthenticated">Attend</b-nav-item>

        <!-- Mentor Dropdown -->
        <b-nav-item-dropdown text="Mentor" right v-if="isMentor || isAdmin">
          <b-dropdown-item href="#/mentor/verify">Verify</b-dropdown-item>
          <b-dropdown-item href="#/mentor/small_group">Small Group</b-dropdown-item>
        </b-nav-item-dropdown>

        <!-- Admin Dropdown -->
        <b-nav-item-dropdown text="Admin" right v-if="isAdmin">
          <b-dropdown-item href="#/smallgroups">Small Groups</b-dropdown-item>
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
          <b-dropdown-item :href="'#/users/' + currentUser._id">Profile</b-dropdown-item>
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
    isMentor: 'auth/isMentor',
    isAdmin: 'auth/isAdmin',
    currentUser: 'auth/current_user'
  }),
  methods: mapActions({
    logout: 'auth/logout'
  })
}
</script>
