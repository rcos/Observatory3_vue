<template>
  <tr>
    <td>{{ date }}</td>
    <td v-if="attendElement.bonusDay">Bonus</td>
    <td v-else>Regular</td>
    <td v-if="attendElement.smallgroup">Small Group</td>
    <td v-else>Large Group</td>
    <td v-if="attendElement.verified">Yes</td>
    <td v-else>No</td>
    <td v-if="attendElement.present">Present</td>
    <td v-else>Absent</td>
  </tr>
</template>

<script>
export default {
  name: 'main_past_attendance',
  props: ['attendElement'],
  computed: {
    date: function () {
      return this.attendElement.date.substring(0, 10)
    }
  }
}
</script>
