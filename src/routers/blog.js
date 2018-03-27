// Blog Containers
import BlogList from '@/containers/blog_list'
import BlogNew from '@/containers/blog_new'
import BlogEdit from '@/containers/blog_edit'
import BlogShow from '@/containers/blog_show'

const BlogListRoute = {
  path: '/blogs',
  name: 'blog_list',
  component: BlogList
}

const BlogNewRoute = {
  path: '/blogs/new',
  name: 'blog_new',
  component: BlogNew
}

const BlogEditRoute = {
  path: '/blogs/:id/edit',
  name: 'blog_edit',
  component: BlogEdit,
  props: true
}

const BlogShowRoute = {
  path: '/blogs/:id',
  name: 'blog_show',
  component: BlogShow,
  props: true
}

export default [
  BlogListRoute,
  BlogNewRoute,
  BlogEditRoute,
  BlogShowRoute
]
