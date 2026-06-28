import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component:()=>import('../views/HomeView.vue'),
      meta: { needLogin: true }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path:'/login',
      name:'login',
      component:()=>import('../views/LoginView.vue')
    }
  ]
})

router.beforeEach((to,from,next)=>{
  const token = localStorage.getItem('token')
  if(to.meta.needLogin && !token){
    next('/login')
  } else {
    next()
  }
})

export default router
