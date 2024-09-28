import { createRouter, createWebHistory } from 'vue-router'
import StudentList from '@/views/StudentList.vue'
import AddNewStudent from '@/views/AddNewStudent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: StudentList
    },
    {
      path: '/add',
      component: AddNewStudent
    },
    {
      path: '/student/:id',
      component: AddNewStudent
    }
  ]
})

export default router
