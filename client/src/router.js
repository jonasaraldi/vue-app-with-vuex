import Vue from 'vue'
import Router from 'vue-router'

import postRoutes from '@/modules/posts/routes' 

const PerfilForm = () => import('./modules/perfil/form/view/PerfilForm')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...postRoutes,
    {
      path: '',
      name: 'perfil-form',
      component: PerfilForm
    },
    {
      path: '*',
      redirect: { name: 'perfil-form' },
    }
  ]
})
