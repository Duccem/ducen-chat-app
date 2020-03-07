import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Chat from '../views/Chat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'login',
    component:Login,
  },
  {
    path: '/chat/:id',
    name: 'chat',
    component:Chat,
    props:true
  },
  {
    path:'',
    redirectTo:'/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
