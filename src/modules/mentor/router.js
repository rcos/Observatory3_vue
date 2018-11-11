// Mentor Containers
import MentorVerify from './views/mentor_verify'
import MentorSmallGroup from './views/mentor_small_group'

const MentorVerifyRoute = {
  path: '/mentor/verify',
  name: 'Mentor Verify',
  component: MentorVerify
}

const MentorSmallGroupRoute = {
  path: '/mentor/small_group',
  name: 'Mentor Small Group',
  component: MentorSmallGroup
}

// TODO - scope these views to be mentor-and-admin only
export default [
  MentorVerifyRoute,
  MentorSmallGroupRoute
]