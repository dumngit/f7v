import HomePage from './pages/home.vue';
import SettingsPage from './pages/settings.vue';
import NotFoundPage from './pages/not-found.vue';

import PanelLeftPage from './pages/panel-left.vue';

export default [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/panel-left/',
    component: PanelLeftPage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];
