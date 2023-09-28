import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './HomeView.vue';
import AboutView from './AboutView.vue';
import EventDetailsView from '../components/EventDetails.vue'; // Add this line

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/event-details/:id', // Add a dynamic parameter for event id
    name: 'event-details',
    component: EventDetailsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
