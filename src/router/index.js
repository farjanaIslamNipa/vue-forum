import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import sourceData from "@/data.json"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forum/:id',
      name: 'Forum',
      component: () => import('@/pages/Forum.vue'),
      props: true
    },
    {
      path: '/category/:id',
      name: 'Category',
      component: () => import('@/pages/Category.vue'),
      props: true
    },
    {
      path: '/me',
      name: 'Profile',
      component: () => import('@/pages/Profile.vue'),
      props: true,
      meta: { toTop: true, smoothScroll: true}
    },
    {
      path: '/me/edit',
      name: 'ProfileEdit',
      component: () => import('@/pages/Profile.vue'),
      props: { edit: true }
    },
    {
      path: '/thread/:id',
      name: 'ThreadShow',
      component: () => import('@/pages/ThreadShow.vue'),
      props: true,
      beforeEnter(to, from, next){
        const threadExist = sourceData.threads.find(thread => thread.id === to.params.id)
        if(threadExist){
          return next()
        }else{
          return next({
            name: 'NotFound',
            params: { pathMatch: to.path.substring(1).split('/') },
            query: to.query,
            hash: to.hash
          })
        }
      }
    },
    { path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: () => import('@/pages/NotFound.vue')
    },

  ],
  scrollBehavior (to) {
    const scroll = {}
    if (to.meta.toTop) scroll.top = 0
    if(to.meta.smoothScroll) scroll.behavior = 'smooth'
    return scroll;
  }
})

export default router
