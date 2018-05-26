
// Event module routes
import EventList from './list'
import EventNew from './new'
import EventNewLargeGroup from './new_large_group'
// import EventEdit from './edit'
// import EventShow from './show'

const ListRoute = {
  path: '/events',
  name: 'event_list',
  component: EventList
}

const NewRoute = {
  path: '/events/new',
  name: 'event_new',
  component: EventNew
}

const NewLargeGroupRoute = {
  path: '/events/new_large_group',
  name: 'event_new_large_group',
  component: EventNewLargeGroup
}

// const EditRoute = {
//   path: '/events/:id/edit',
//   name: 'event_edit',
//   component: EventEdit,
//   props: true
// }

// const ShowRoute = {
//   path: '/events/:id',
//   name: 'event_show',
//   component: EventShow,
//   props: true
// }

export default [
  ListRoute,
  NewRoute,
  NewLargeGroupRoute
  // EditRoute,
  // ShowRoute
]
