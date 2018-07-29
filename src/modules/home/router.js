// Main Containers
import MainHome from './views/main_home'
import MainSponsors from './views/main_sponsors'
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

const MainFAQRoute = {
  path: '/FAQ',
  name: 'main_faq',
  component: MainFAQ
}

export default [
  MainHomeRoute,
  MainSponsorsRoute,
  MainFAQRoute
]
