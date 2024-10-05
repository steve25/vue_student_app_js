import { createRouter, createWebHistory } from 'vue-router';
import StudentList from '@/views/StudentList.vue';
import AddNewStudent from '@/views/AddNewStudent.vue';
import NotFound from '@/views/NotFound.vue';
import ShowStudent from '@/views/ShowStudent.vue';
import EditStudent from '@/views/EditStudent.vue';

const myRoutes = [
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
    component: ShowStudent
  },
  {
    path: '/student/edit/:id',
    component: EditStudent
  },
  {
    path: '/not-found',
    component: NotFound
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/not-found'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: myRoutes
});

export default router;
