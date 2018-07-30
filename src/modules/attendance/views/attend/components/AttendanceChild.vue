<template>
  <tr>
    <td>{{ date }}</td>
    <td v-if="model.bonusDay">Bonus</td>
    <td v-else>Regular</td>
    <td v-if="model.smallgroup">Small Group</td>
    <td v-else>Large Group</td>
    <td v-if="model.verified">Yes</td>
    <td v-else>No</td>
    <td v-if="model.present">Present</td>
    <td v-else>Absent</td>
  </tr>
</template>

<script>
export default {
  name: 'AttendanceChild',
  props: ['model'],
  computed: {
    date: function () {
      return this.model.date.substring(0, 10)
    }
  }
}
</script>
