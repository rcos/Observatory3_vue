// Admin Containers
import AdminAttendance from '@/containers/admin_attendance'
import AdminSettings from '@/containers/admin_settings'
import AdminUsers from '@/containers/admin_users'

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

export default [
  AdminAttendanceRoute,
  AdminUserRoute,
  AdminSettingsRoute
]
