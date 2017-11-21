
<template>
  <div class="table-responsive">
    <table class="table table-hover text-center table-striped table-bordered">
      <thead>
        <tr>
            <td colspan="3">Info</td>
            <td colspan="2">Full Group</td>
            <td colspan="2">Small Group</td>
            <td colspan="2">Contributions</td>
            <td colspan="2">Edit</td>
        </tr>
        <tr>
            <td>Name</td>
            <td>Git</td>
            <td>User Role</td>
            <td title="Full Group Attendance">Cal</td>
            <td title="Bonus Full Group Attendance">+</td>
            <td title="Small Group Attendance">Cal</td>
            <td title="Bonus Small Group Attendance">+</td>
            <td>Events</td>
            <td>Commits</td>
            <td>Active</td>
            <td>Attendance</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Aaron Gunderson</th>
          <td>Pic</td>
          <td>
            <select class="form-control" ng-model="user.role" ng-change="updateUserRole(user)">
              <option value="user">User</option>
              <option value="mentor">Mentor</option>
              <option value="admin">Admin</option>
            </select>
          </td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td>0</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
