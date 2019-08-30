const EmptyTemplate = () => import('@/templates/EmptyTemplate')
const PostGrid = () => import('./grid/view/PostGrid')
const PostForm = () => import('./form/view/PostForm')

export default [{
    path: '/posts',
    name: 'posts',
    component: EmptyTemplate,
    props: { customClass: 'post-template' },
    redirect: { name: 'post-grid' },
    children: [
      {
        path: '',
        name: 'post-grid',
        component: PostGrid,
      },
      {
        path: 'add',
        name: 'add-post',
        component: PostForm,
      },
      {
        path: 'edit/:id',
        name: 'edit-post',
        component: PostForm,
      },
      {
        path: '*',
        redirect: { name: 'post-grid' }
      }
    ]
}]