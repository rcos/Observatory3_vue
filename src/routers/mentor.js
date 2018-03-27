// Mentor Containers
import MentorVerify from '@/containers/mentor_verify'
import MentorSmallGroup from '@/containers/mentor_small_group'

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

export default [
  MentorVerifyRoute,
  MentorSmallGroupRoute
]
