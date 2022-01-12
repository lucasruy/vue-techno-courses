import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Course from '@/views/Course.vue'
import Courses from '@/views/Courses.vue'
import Contact from '@/views/Contact.vue'
import NotFound from '@/views/NotFound.vue'
import Classroom from '@/views/Classroom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/courses',
    name: 'courses',
    component: Courses
  },
  {
    path: '/courses/:course',
    name: 'course',
    component: Course,
    props: true,
    children: [
      {
        path: ':classroom',
        name: 'classroom',
        component: Classroom,
        props: true,
      },
    ]
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
