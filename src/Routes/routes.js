import { Auth } from '../Pages/Auth/Auth';
import { Event } from '../Pages/Event/Event';
import { Events } from '../Pages/Events/Events';
import { Home } from '../Pages/Home/Home';
import { NewEvent } from '../Pages/NewEvent/NewEvent';
import { Profile } from '../Pages/Profile/Profile';

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
  },
  {
    href: '/profile',
    page: Profile,
    id: 'profile'
  },
  {
    href: '/new/event',
    page: NewEvent,
    id: 'newEvent'
  },
  {
    href: `/detailEvent/${localStorage.getItem('id')}`,
    page: Event,
    id: 'eventDetail'
  }
];
