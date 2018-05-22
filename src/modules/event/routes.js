
// Event module routes
import EventList from './containers/list'
// import EventNew from './containers/new'
// import EventEdit from './containers/edit'
// import EventShow from './containers/show'

const ListRoute = {
  path: '/events',
  name: 'blog_list',
  component: EventList
}

// const NewRoute = {
//   path: '/events/new',
//   name: 'blog_new',
//   component: EventNew
// }

// const EditRoute = {
//   path: '/events/:id/edit',
//   name: 'blog_edit',
//   component: EventEdit,
//   props: true
// }

// const ShowRoute = {
//   path: '/events/:id',
//   name: 'blog_show',
//   component: EventShow,
//   props: true
// }

export default [
  ListRoute
  // NewRoute,
  // EditRoute,
  // ShowRoute
]
