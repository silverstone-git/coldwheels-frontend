import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "@stores/authStore"


const routes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/views/Landing.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/Signup.vue'),
    meta: { requiresAuth: false }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { requiresAuth: true }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore();
  
  //initialize auth state
  if (!authStore.initialized) {
    authStore.initialize();
  }

  if (to.meta.requiresAuth && !authStore.loggedIn) {
    next({ name: 'login' });
  } else if ((to.name === 'login' || to.name === 'signup') && authStore.loggedIn) {
    next({ name: 'dashboard' });
  } else {
    console.log("bo bs, just show page case")
    next();
  }
});

export default router;
