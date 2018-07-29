import Attend from './views/attend'

const AttendRoute = {
  path: '/attendance',
  name: 'main_attendance',
  component: Attend
}

// TODO - scope these views to be authenticated-only
export default [
  AttendRoute
]
