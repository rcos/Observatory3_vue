// Admin Containers
import AdminAttendance from './views/admin_attendance'
import AdminSettings from './views/admin_settings'
import AdminUsers from './views/admin_users'

const AdminAttendanceRoute = {
  path: '/admin/attendance',
  name: 'admin_attendance',
  component: AdminAttendance
}

const AdminUserRoute = {
  path: '/admin/users',
  name: 'admin_users',
  component: AdminUsers
}

const AdminSettingsRoute = {
  path: '/admin/settings',
  name: 'admin_settings',
  component: AdminSettings
}

// TODO - scope these views to be admin-only
export default [
  AdminAttendanceRoute,
  AdminUserRoute,
  AdminSettingsRoute
]
