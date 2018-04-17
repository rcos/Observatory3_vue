
<template>
  <div class="container">
    <LayoutView :currentUser="currentUser"/>
    <ProfileEditor :currentUser="currentUser"/>
    <ChangePassword :currentUser="currentUser"/>
    <DeleteAccount :currentUser="currentUser"/>
  </div>
</template>

<!-- // // // //  -->

<script>
import LayoutView from './components/layout'
import ProfileEditor from './components/ProfileEditor'
import ChangePassword from './components/ChangePassword'
import DeleteAccount from './components/DeleteAccount'
import { mapGetters } from 'vuex'

export default {
  components: {
    LayoutView,
    ProfileEditor,
    ChangePassword,
    DeleteAccount
  },
  metaInfo: {
    title: 'User - Settings'
  },
  computed: mapGetters({
    currentUser: 'auth/current_user'
  })
}
</script>


