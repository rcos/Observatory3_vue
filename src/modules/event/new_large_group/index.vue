<template>
  <div class="container">
    <PageHeader title="New Large Group" />
    <EventForm />
  </div>
</template>

<script>

import EventForm from '../components/LargeGroupForm'

export default {
  name: 'EventList',
  components: {
    EventForm
  }
}
</script>
