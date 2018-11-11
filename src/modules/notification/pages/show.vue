<template>
  <Loading v-if="fetching" />
  <div class="container" v-else>
    <NotificationShowWidget :model="model" :fetching="fetching" />
  </div>
</template>

<!-- // // // //  -->

<script>
import { mapGetters, mapActions } from 'vuex'
import Loading from '@/components/Loading'
import NotificationShowWidget from '@/modules/notification/components/NotificationShowWidget'
import User from '@/modules/notification/components/User'

export default {
  props: ['id'],
  name: 'notification_show',
  metaInfo: {
    title: 'Notifications - Show'
  },
  components: {
    User,
    NotificationShowWidget,
    Loading
  },
  created () {
    this.fetch(this.id)
    this.fetchUser(this.id)
  },
  methods: mapActions({
    fetchUser: 'notification/fetchUser',
    fetch: 'notification/fetchModel',
    onConfirmDestroy: 'notification/deleteModel'
  }),
  computed: mapGetters({
    user: 'notification/user',
    model: 'notification/model',
    fetching: 'notification/fetching'
  })
}
</script>
