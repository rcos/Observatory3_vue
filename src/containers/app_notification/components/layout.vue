<template>
  <transition-group name="list" tag='div' class="container">
    <div class="row" v-for="each in collection" v-bind:key="each.id">
      <NotificationChild :item="each"/>
    </div>
  </transition-group>
</template>

<!-- // // // //  -->

<script>
import NotificationChild from './notificationChild'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      collection: 'achievement/collection'
    })
  },
  components: {
    NotificationChild
  }
}
</script>

<!-- // // // //  -->

<!-- QUESTION - SCOPED? -->
<style>
  .list-enter-active, .list-leave-active {
    transition: opacity .1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
  }
</style>
