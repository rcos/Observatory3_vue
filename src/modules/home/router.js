// Main Containers
import MainHome from './views/main_home'
import MainSponsors from './views/main_sponsors'
import MainAttend from './views/main_attend'
import MainFAQ from './views/main_faq'

const MainHomeRoute = {
  path: '/',
  name: 'main_home',
  component: MainHome
}

const MainSponsorsRoute = {
  path: '/sponsors',
  name: 'main_sponsors',
  component: MainSponsors
}

const MainAttendRoute = {
  path: '/main/attend',
  name: 'main_attendance',
  component: MainAttend
}

const MainFAQRoute = {
  path: '/FAQ',
  name: 'main_faq',
  component: MainFAQ
}

export default [
  MainHomeRoute,
  MainSponsorsRoute,
  MainAttendRoute,
  MainFAQRoute
]
