import { Auth } from '../Pages/Auth/Auth';
import { Events } from '../Pages/Events/Events';
import { Home } from '../Pages/Home/Home';

export const routes = [
  {
    href: '/events',
    page: Events,
    id: 'events'
  },
  {
    href: '/auth',
    page: Auth,
    id: 'auth'
  },
  {
    href: '/',
    page: Home,
    id: 'home'
  }
];
